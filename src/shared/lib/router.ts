import { Block } from "./block";

function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (!root) {
    throw new Error("Root не найден");
  }

  root.innerHTML = "";
  //@ts-ignore
  root.insertAdjacentElement("afterbegin", new block().getContent());
  return root;
}

type TProps<T> = T & {
  rootQuery: string;
};

class Route<T extends Record<string, unknown> = Record<string, unknown>> {
  private _pathname: string;
  private _block: Block;
  private _props: TProps<T>;
  private _guard: TGuardFunc;

  constructor(
    pathname: string,
    view: Block,
    guard: TGuardFunc,
    props: TProps<T>
  ) {
    this._pathname = pathname;
    this._block = view;
    this._props = props;
    this._guard = guard;
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

  public async render() {
    const guardRes = await this._guard();

    if (!guardRes) {
      return;
    }

    render(this._props.rootQuery, this._block);
  }
}

type TGuardFunc = () => Promise<boolean>;

class Router {
  public routes: Route[];
  public history: History;
  private _currentRoute: Route | null;
  private _rootQuery: string;
  private _guard: TGuardFunc;

  constructor(rootQuery: string) {
    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this._guard = () => new Promise((resolve) => resolve(true));
  }

  use(
    pathname: string,
    block: Block,
    guard: TGuardFunc = () => new Promise((r) => r(true))
  ) {
    const route = new Route(pathname, block, guard, {
      rootQuery: this._rootQuery,
    });
    this.routes.push(route);

    return this;
  }

  guard(func: TGuardFunc) {
    this._guard = func;
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
    this._guard().then((res) => {
      if (res) {
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
    });
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

export default new Router("#root");
