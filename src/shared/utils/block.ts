import Handlebars from "handlebars";

import { EventBus } from "./event-bus";
import { createElement } from "./create-element";

export class Block<
  T extends Record<string, any> = Record<string, any>,
  C extends string = string
> {
  eventBus: any;
  props: T;
  components: Record<string, Node>;

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  _element: HTMLElement | Element | null = null;

  constructor(props: T, components?: Record<C, Node>) {
    const eventBus = new EventBus();

    this.props = this._makePropsProxy(props);

    this.components = components ?? {};

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

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount(this.props);
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount(oldProps: T) {}

  _componentDidUpdate(oldProps: T, newProps: T) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

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
    const block = Handlebars.compile(this.render());
    this._removeEvents();

    if (this._element) {
      this._element = null;
      this._element = createElement(block(this.props));
    } else {
      this._element = createElement(block(this.props));
    }

    this._addEvents();

    this._renderComponents();
  }

  _renderComponents() {
    Object.entries(this.components).forEach(([name, node]) => {
      console.log(`node`, node);
      const plug = this._element?.querySelector(`[data-component="${name}"]`);
      if (plug) {
        plug.replaceWith(node);
      }
    });
  }

  // Может переопределять пользователь, необязательно трогать
  render(): string {
    return "";
  }

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
    return this.element as HTMLElement;
  }

  _makePropsProxy(props: T) {
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
}
