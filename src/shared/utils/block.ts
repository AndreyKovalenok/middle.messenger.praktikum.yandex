import Handlebars, { create } from "handlebars";
import { v4 } from "uuid";

import { EventBus } from "./event-bus";
import { createElement } from "./create-element";

type TMeta<T> = {
  props: T;
};

export class Block<
  T extends Record<string, any> = Record<string, any>,
  RenderProps extends Record<string, any> = Record<string, any>
> {
  eventBus: any;
  props: T & RenderProps;
  children: Record<string, Block>;

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  _element: HTMLElement | Element | null = null;
  _meta: TMeta<T> | null = null;

  id = v4();

  constructor(props: T & RenderProps) {
    const eventBus = new EventBus();

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this.children = {};

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: any) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {}

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount(this.props);
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  // eslint-disable-next-line no-unused-vars
  componentDidMount(oldProps: T) {}

  _componentDidUpdate(oldProps: T, newProps: T) {
    const response = this.componentDidUpdate(oldProps, newProps);

    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // eslint-disable-next-line no-unused-vars
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

  _registerChildren() {
    Object.entries(this.props).forEach(([name, prop]) => {
      if (prop instanceof Block) {
        this.children[name] = prop;
      }
    });
  }

  _render() {
    this._removeEvents();

    this._element = this.render();

    this._addEvents();
  }

  compile(template: string) {
    this._registerChildren();

    const renderHbs = Handlebars.compile(template);
    const block = createElement(renderHbs(this.props));

    Object.entries(this.children).forEach(([name, component]) => {
      const plug = block.querySelector(`[data-component="${name}"]`);
      plug?.replaceWith(component.render() as Element);
    });

    return block;
  }

  // Может переопределять пользователь, необязательно трогать
  render(): Element {
    return new Element();
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
    return this.element;
  }

  _makePropsProxy(props: T & RenderProps) {
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
