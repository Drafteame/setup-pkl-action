import core from '@actions/core';

export default class Action {
  constructor(action) {
    this.action = action;
  }

  run() {
    core.info(`Perform ${action} action...`);
  }
}
