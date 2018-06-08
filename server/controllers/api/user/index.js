import {  pool, query } from 'Sql/index';

class UserController {

  static getUser(attributes) {
    return new Promise(( resolve, reject ) => {
      query( 'select name from `Users` where `name` = ? and `password` = ?', [attributes.name, attributes.password])
        .then((v) => { resolve(v) })
        .catch((e) => { reject(e) });
    });
  };

  static create(attributes = {}) {
    return new Promise(async( resolve, reject ) => {
      const exitedUser = await this.getUser(attributes).catch((e) => {reject(e)});
      if (exitedUser[0].name === attributes.name) {
        reject({status: 400, message: 'user existed!'});
      }
      if (attributes.name && attributes.name.trim() !== '' && attributes.password && attributes.password.length >= 6 && attributes.password.length < 8) {
        query( 'insert into Users SET ?', attributes)
          .then((v) => { resolve(v) })
          .catch((e) => { reject(e) });
      } else {
        reject({status: 400, message: 'create users invalid'});
      }
    });
  };
}

export default UserController;
