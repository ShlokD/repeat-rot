export default class {
  constructor(initialState) {
    this.state = initialState;
    this.actions = [];
    this.startActionIndex = 0;
    this.endActionIndex = 0;

    this.doAddAction = this.doAddAction.bind(this);
    this.doGetCurrentState = this.doGetCurrentState.bind(this);
  }

  doAddAction(action) {
    this.actions.push(action);
    this.endActionIndex++;
  }

  doGetCurrentState() {
    while(this.startActionIndex < this.endActionIndex) {
      const actionToApply = this.actions[this.startActionIndex];
      this.state = actionToApply(this.state);
      this.startActionIndex++;
    }
    return this.state;
  }
}
