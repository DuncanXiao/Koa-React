import path from 'path';
import getFilesName from 'Utilities/getFilesName';

describe('#getFilesName', () => {
  it('return the array of file name without ignored file', () => {
    const modelPath = path.resolve(__dirname, '../../model');
    const ignoreFilesName = ['index.js'];
    const result = getFilesName(modelPath, ignoreFilesName);
    expect(result.indexOf(ignoreFilesName[0])).to.eq(-1);
  })
});