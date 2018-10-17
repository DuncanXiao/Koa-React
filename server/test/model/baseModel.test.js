// const BaseModel = require('../../model/baseModel');
import BaseModel from 'Model/baseModel';
import fs from 'fs';
describe('ss', () => {
  it.only('sss', () => {
    console.log('test')
    const emailModel = new BaseModel({modelName: 'email'});
    // emailModel.model.query('SELECT...', { type: sequelize.QueryTypes.SELECT }).then(function (results) {
    //   // SELECT query - use then
    // })
  });
});