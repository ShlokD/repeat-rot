import Store from "../index";

describe("state management tests", () => {
  let store;

  beforeAll(() => {
    store = new Store({ foo: "bar" });
  });

  test("it creates a store with an initial state", () => {
    const state = store.doGetCurrentState();
    expect(state).toEqual({ foo: "bar" });
  });

  test("it applies an action and changes the state", () => {
    const action = state => {
      return Object.assign({}, state, { foo: "baz" });
    };
    store.doAddAction(action);
    const state = store.doGetCurrentState();
    expect(state).toEqual({ foo: "baz" });
  });

  test("it applies multiple actions and changes the state", () => {
    const action1 = state => {
      return Object.assign({}, state, { friend: "ship" });
    };
    const action2 = state => {
      return Object.assign({}, state, { fool: "proof"})
    }
    store.doAddAction(action1);
    store.doAddAction(action2);
    const state = store.doGetCurrentState();
    expect(state).toEqual({ foo: "baz", friend: "ship", fool: "proof" });
  });
});
