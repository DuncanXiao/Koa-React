// import { sequelize } from 'Sql/index';
// import emailModel from 'Model/emailModel';
// import UserController from './user';
// import * as _ from 'underscore';

class EmailController {

  // static async getEmail(attributes = {}) {
  //   return await emailModel.findOne({
  //     where: {
  //       email: attributes.email
  //     }
  //   }).catch(e =>{ throw {statusCode: 500, message: e} });
  // }

  // static async create(attributes = {}, sqlOptions = {transaction: null}) {
  //   let result = {};
  //   await emailModel.sync().catch(e => { throw {statusCode: 500, message: e} });
  //   await emailModel.create(attributes, sqlOptions)
  //     .then(v => result = {statusCode: 201, message: v})
  //     .catch(e => { throw {statusCode: 500, message: e} });
  //   return result
  // }

  // static async update(attributes = {}, sqlOptions = {transaction: null}) {
  //   let result = {};
  //   const queryData = _.omit(attributes, 'email');
  //   Object.assign(sqlOptions, {where: {email: attributes.email}});
  //   await emailModel.sync().catch(e => { throw {statusCode: 500, message: e} });
  //   await emailModel.update(queryData, sqlOptions)
  //     .then(v => result = {statusCode: 200, message: v})
  //     .catch(e => {
  //       throw {statusCode: 500, message: e}
  //     });
  //   return result;
  // }

  // static async updateEmailandCreateUser(attributes = {}) {
  //   return sequelize.transaction(async (t) => {
  //     return Promise.all([UserController.create(attributes.userParams, {transaction: t}), this.update(attributes.emailParams, {transaction: t})])
  //       .catch((e)=>{
  //         throw e
  //       })
  //   }).catch(e => { throw {statusCode: 500, message: e} })
  // }
}

export default EmailController;
