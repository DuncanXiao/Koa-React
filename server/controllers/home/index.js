
class HomeController {
  constructor() {
    this.template = 'header.ejs';
    this.templateOptions = {
      title: 'hahaha'
    };
  }

  login () {

  }

  text() {
    return 'hhahahhas';
  }
}
const homeController = new HomeController();
export default homeController;