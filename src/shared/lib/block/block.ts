import { v4 } from "uuid";

import { EventBus } from "../event-bus";

type TMeta<T> = {
  tagName: string;
  props: T;
  attributes?: Record<string, string>;
};

type TProps<T> = T & { events?: Record<string, any> };

export class Block<T extends any = any> {
  eventBus: any;
  props: TProps<T>;

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_CDR: "flow:component-did-render",
    FLOW_RENDER: "flow:render",
  };

  private _element: HTMLElement | null = null;
  private _meta: TMeta<T> | null = null;

  public id = v4();

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(
    props: TProps<T>,
    tagName: string = "div",
    attributes?: Record<string, string>
  ) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
      attributes,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: any) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDR, this._componentDidRender.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    if (!this._meta) {
      throw new Error("Название компонента не определено");
    }

    const { tagName, attributes } = this._meta;

    this._element = this._createDocumentElement(tagName, attributes);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    this.componentDidMount(this.props);
  }

  // eslint-disable-next-line no-unused-vars
  public componentDidMount(_oldProps: T) {}

  private _componentDidUpdate(oldProps: T, newProps: T) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  private _componentDidRender() {
    this.componentDidRender();
  }

  public componentDidRender() {}

  // eslint-disable-next-line no-unused-vars
  public componentDidUpdate(oldProps: T, newProps: T) {
    return Object.entries(oldProps as Object).some(
      ([name, value]) => newProps[name as keyof T] !== value
    );
  }

  public setProps = (nextProps: T) => {
    if (!nextProps) {
      return;
    }
    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const block = this.render();

    this._removeEvents();

    this._element!.innerHTML = "";

    if (Array.isArray(block)) {
      block.forEach((el) => this.element!.appendChild(el));
    } else {
      this._element!.appendChild(block);
    }

    this._addEvents();

    this.eventBus().emit(Block.EVENTS.FLOW_CDR);
  }

  // Может переопределять пользователь, необязательно трогать
  public render(): DocumentFragment | DocumentFragment[] {
    return new DocumentFragment();
  }

  private _addEvents() {
    const { events = {} } = this.props;

    if (this._element) {
      Object.keys(events).forEach((eventName) => {
        this._element!.addEventListener(eventName, events[eventName]);
      });
    }
  }

  private _removeEvents() {
    const { events = {} } = this.props;

    if (this._element) {
      Object.keys(events).forEach((eventName) => {
        this._element!.removeEventListener(eventName, events[eventName]);
      });
    }
  }

  public getContent() {
    return this.element as HTMLElement;
  }

  private _makePropsProxy(props: TProps<T>) {
    return new Proxy(props, {
      set: (target, prop, value) => {
        const oldProps = { ...(props as Object) };
        target[prop as keyof T] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, props);

        return true;
      },
      deleteProperty() {
        throw new Error("Нет доступа");
      },
    });
  }

  private _createDocumentElement(
    tagName: string,
    attributes?: Record<string, string>
  ) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков

    const element = document.createElement(tagName);

    if (attributes) {
      Object.entries(attributes).forEach((attribute) => {
        element.setAttribute(...attribute);
      });
    }

    return element;
  }
}
