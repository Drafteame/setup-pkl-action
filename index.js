import Action from './src/action.js';
import * as inputs from './src/inputs/index.js';

const main = async () => {
  const action = new Action(inputs.getString('action', 'default'));

  action.run();
};

main();
