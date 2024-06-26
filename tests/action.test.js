import sinon from 'sinon';
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import Action from '../src/action.js';
import fs from 'fs';
import core from '@actions/core';

chai.use(chaiAsPromised);

const expect = chai.expect;

describe('Action', () => {
  let sandbox;
  let action;
  let version = '1.0.0';

  beforeEach(() => {
    sandbox = sinon.createSandbox();

    action = new Action(version);
    action.download = sandbox.stub().resolves(Buffer.from('test data'));

    sandbox.stub(core, 'info');
    sandbox.stub(fs, 'writeFileSync');
    sandbox.stub(fs, 'chmodSync');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('downloads and installs PKL successfully', async () => {
    await action.run();

    sinon.assert.calledWith(core.info, `Downloading PKL version ${version}`);
    sinon.assert.calledWith(core.info, 'PKL downloaded');
    sinon.assert.calledWith(core.info, 'Setting PKL permissions');
    sinon.assert.calledWith(core.info, 'PKL permissions set');
    sinon.assert.calledWith(core.info, 'PKL installed successfully');
    sinon.assert.calledWith(
      fs.writeFileSync,
      action.finalPath,
      sinon.match.instanceOf(Buffer)
    );
    sinon.assert.calledWith(fs.chmodSync, action.finalPath, 0o755);
  });

  it('throws an error when download fails', async () => {
    action.download.rejects(new Error('Network error'));

    await expect(action.run()).to.be.rejectedWith('Network error');
  });
});
