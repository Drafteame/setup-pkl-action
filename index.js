import * as core from '@actions/core';
import Action from './src/action.js';
import * as inputs from './src/inputs/index.js';

const main = async () => {
  const action = new Action(inputs.getString('version', '0.26.0'));

  try {
    await action.run();
  } catch (error) {
    core.setFailed(error.message);
  }
};

main();
