import { EventBus } from "./event-bus";

type TMeta<T> = {
  tagName: keyof HTMLElementTagNameMap;
  props: T;
};

type TEvents = Record<string, EventListenerOrEventListenerObject>;

export class Block<T extends { events?: TEvents } = {}> {
  eventBus: any;
  props: T;

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  _element: HTMLElement | null = null;
  _meta: TMeta<T> | null = null;

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName: keyof HTMLElementTagNameMap = "div", props: T) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: any) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    if (!this._meta) {
      throw new Error("Название компонента не определено");
    }

    const { tagName } = this._meta;

    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount(this.props);
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidMount(oldProps: T) {}

  _componentDidUpdate(oldProps: T, newProps: T) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps: T, newProps: T) {
    return true;
  }

  setProps = (nextProps: T) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напишите свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы возвращать из compile DOM-ноду
    this._removeEvents();
    this._addEvents();
  }

  // Может переопределять пользователь, необязательно трогать
  render() {}

  _addEvents() {
    const { events = {} } = this.props;

    if (this._element) {
      Object.keys(events).forEach((eventName) => {
        this._element!.addEventListener(eventName, events[eventName]);
      });
    }
  }

  _removeEvents() {
    const { events = {} } = this.props;

    if (this._element) {
      Object.keys(events).forEach((eventName) => {
        this._element!.removeEventListener(eventName, events[eventName]);
      });
    }
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: T) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      set(target, prop, value) {
        if (self.props[prop as keyof T] !== value) {
          target[prop as keyof T] = value;
          self.eventBus().emit(Block.EVENTS.FLOW_CDU);
        }

        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  _createDocumentElement(tagName: keyof HTMLElementTagNameMap) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return document.createElement(tagName);
  }
}
