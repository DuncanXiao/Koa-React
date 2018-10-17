import sequelize from './sequelizes';

const inintModel = () => {
  sequelize.import(`${__dirname}/sequelizes/${modelName}`);
}


class BaseModel {
  constructor(options) {
    this.inintModel(options.modelName);
  }

  inintModel(modelName) {
    this.model = sequelize.import(`${__dirname}/sequelizes/${modelName}`);
    this.model.sync();
  }
}

export default BaseModel;