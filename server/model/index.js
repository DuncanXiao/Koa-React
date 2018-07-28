import Email from './email';
import User from './user';

const initModels = () => {
  Email.sync();
  User.sync();
};