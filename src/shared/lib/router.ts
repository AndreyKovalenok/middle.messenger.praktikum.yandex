import { Block } from "./block";

function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (!root) {
    throw new Error("Root не найден");
  }

  root.innerHTML = "";
  root.insertAdjacentElement("afterbegin", block.getContent());
  return root;
}

type TProps<T> = T & {
  rootQuery: string;
};

class Route<T extends Record<string, unknown> = Record<string, unknown>> {
  private _pathname: string;
  private _block: Block;
  private _props: TProps<T>;

  constructor(pathname: string, view: Block, props: TProps<T>) {
    this._pathname = pathname;
    this._block = view;
    this._props = props;
  }

  public navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  public leave() {}

  public match(pathname: string) {
    return pathname === this._pathname;
  }

  public render() {
    render(this._props.rootQuery, this._block);
  }
}

export class Router {
  private static __instance: Router;
  public routes: Route[] = [];
  public history: History = window.history;
  private _currentRoute: Route | null = null;
  private _rootQuery: string = "";

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: Block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event: any) => {
      event.preventDefault();
      this._onRoute(event.currentTarget?.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, "", pathname);
    this._onRoute(window.location.pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}
