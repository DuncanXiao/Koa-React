import userModel from 'Model/user';

class UserController {

  static async getUser(attributes = {}) {
    let result = {};
    await userModel.findOne({
      where: {
        email: attributes.email
      }
    }).then(v => result = {statusCode: 200, message: v.get()})
      .catch(e =>{ throw {statusCode: 500, message: e} });
    return result;
  };

  static async create(attributes = {}, sqlOptions = {transaction: null}) {
    let result = {};
    if (attributes.name.trim() === '') { throw {status: 400, message: 'create users invalid'}; }
    await userModel.sync().catch(e => { throw {statusCode: 500, message: e} });
    await userModel.create(attributes, sqlOptions)
      .then(v => result = {statusCode: 201, message: v.get()})
      .catch(e => { throw {statusCode: 500, message: e} });
    return result
  };
}

export default UserController;
