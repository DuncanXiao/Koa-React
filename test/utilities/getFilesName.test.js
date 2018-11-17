import path from 'path';
import { getFilesName, getFilesPath } from 'Utilities/getFiles';

describe('#getFilesName', () => {
  it('return the array of file name without ignored file', () => {
    const modelPath = path.resolve(__dirname, '../../server/model');
    const ignoreFilesName = ['index.js'];
    const result = getFilesName({ignoreFilesName, rootPath: modelPath});
    expect(result.indexOf(ignoreFilesName[0])).to.eq(-1);
  });
});

describe('#getFilesPath', () => {
  it('return the array of file name without ignored file', () => {
    const rootPath = path.resolve(__dirname, '../../server/routers');
    const paths = getFilesPath({rootPath: rootPath, ignoreFilesName: ['index.js']});
    expect(paths.indexOf('/index.js')).to.eq(-1);
  });
});
