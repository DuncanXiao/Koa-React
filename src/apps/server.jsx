import HomePage from 'Apps/HomePage/index';

global.window['HomePage'] = (data) => {
  fetch('/api/login', {
    method: 'Post',
    headers: {credientials: 'include'}
  }).then(((response) => {
    console.log('login success.');
    console.log(data);
    Object.assign(data, {user: response.user})
    ReactDOM.render(
      <HomePage />,
      document.getElementById('app-container'),
    );
  })).catch(() => {
    console.log('login error');
    ReactDOM.render(
      <HomePage user={data.user} />,
      document.getElementById('app-container'),
    );
  });
};