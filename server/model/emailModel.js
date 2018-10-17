const BaseModel = require('./baseModel');

class EmailModel extends BaseModel {
  constructor (options) {
    this.modelName = options.modelName || 'email';
    super(options);
  }
}