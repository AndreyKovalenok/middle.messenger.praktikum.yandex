class State {
  private static _instance: State;
  public state = {};

  constructor() {
    if (State._instance) {
      return State._instance;
    }

    this.state = {};

    State._instance = this;
  }

  change(payload: Record<string, unknown>) {
    this.state = {
      ...this.state,
      ...payload,
    };
  }
}

export default State;
