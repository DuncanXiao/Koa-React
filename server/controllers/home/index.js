import { verifyToken } from 'Utilities/createJwt';
import UserController from 'Controllers/api/user';

class HomeController {
  template = 'header.ejs';
  templateOptions = {
    title: 'hahaha',
    user: null
  };

  async login(token) {
    const data = verifyToken(token);
    await UserController.getUser(data).then((user)=>{
      Object.assign(this.templateOptions, {user: user.get()});
    })
  }
}

export default HomeController;