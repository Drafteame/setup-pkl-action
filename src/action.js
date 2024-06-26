import core from '@actions/core';
import fs from 'fs';
import download from 'download';

export default class Action {
  constructor(version) {
    this.version = version;
    this.url = `https://github.com/apple/pkl/releases/download/${this.version}/pkl-linux-amd64`;
    this.finalPath = '/usr/local/bin/pkl';
    this.download = download;
  }

  async run() {
    core.info(`Downloading PKL version ${this.version}`);
    await this.downloadBinaryFile(this.url, this.finalPath);
    core.info('PKL downloaded');

    core.info('Setting PKL permissions');
    fs.chmodSync(this.finalPath, 0o755);
    core.info('PKL permissions set');

    core.info('PKL installed successfully');
  }

  async downloadBinaryFile(url, filename) {
    fs.writeFileSync(filename, await this.download(url));
  }
}
