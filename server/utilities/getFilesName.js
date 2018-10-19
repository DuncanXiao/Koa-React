import fs from 'fs';

const getFilesName = (path, ignoreFilesName, files=[]) => {
  const fileNames = fs.readdirSync(path);
  fileNames.forEach((fileName) => {
    if (!/(.js)$/.test(fileName)) {
      getFilesName(`${path}/${fileName}`, ignoreFilesName, files);
    } else if (/(.js)$/.test(fileName) && ignoreFilesName.indexOf(fileName) == -1) {
      files.push(fileName);
    }
  });
  return files;
}

export default getFilesName;