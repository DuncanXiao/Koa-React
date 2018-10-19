import path from 'path';
import sequelize from './sequelizes';
import getFilesName from 'Utilities/getFilesName';

const modelMap = {};

const inintModel = () => {
  const sequelizeModels = path.resolve(__dirname, './sequelizes');
  const ignoreFilesName = ['index.js'];
  const modelFilesName = getFilesName(sequelizeModels, ignoreFilesName);
  modelFilesName.forEach((fileName) => {
    const model = sequelize.import(`${__dirname}/sequelizes/${fileName}`);
    modelMap[`${fileName.replace(/.js/, "")}Model`] = model;
  });
}

inintModel();

class BaseModel {

  constructor(options) {
    this.getModel(options.modelName);
  }

  getModel(modelName) {
    this.model = modelMap[modelName];
    this.model.sync();
  }

  async insertToSql(values, options) {
    try{
      const instance = await this.model.create(values, options);
      return instance.dataValues
    } catch (error) {
      throw `${error.message} sql: ${error.sql}`;
    }
  }

  async deleteToSql(options) {
    try{
      const instance = await this.model.destroy(options);
      return instance;
    } catch (error) {
      throw `${error.message} sql: ${error.sql}`;
    }
  }

  async updateToSql(values, options) {
    try{
      const instance = await this.model.update(values, options);
      return instance;
    } catch (error) {
      throw `${error.message} sql: ${error.sql}`;
    }
  }
}

export default BaseModel;