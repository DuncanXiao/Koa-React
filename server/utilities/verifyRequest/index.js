import validator from 'validator';
import badRequestMessage from './config';

const verifyRequest = (data) => {
  return new Promise((resolve, reject) => {
    if (data.hasOwnProperty('email') && !validator.isEmail(data.email)) {
      reject(badRequestMessage.email);
      return false
    } else if (data.hasOwnProperty('password') && !validator.isEmpty(data.password)) {
      reject(badRequestMessage.password);
      return false
    } else if (data.hasOwnProperty('name') && !validator.isEmpty(data.name)) {
      reject(badRequestMessage.name);
      return false
    } else if (data.hasOwnProperty('code') && !validator.isEmpty(data.code)) {
      reject(badRequestMessage.code);
      return false
    }
  });
};

export default verifyRequest;