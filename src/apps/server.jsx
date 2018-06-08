import HomePage from 'Apps/HomePage/index';

global.window['HomePage'] = () => {
  ReactDOM.render(
    <HomePage />,
    document.getElementById('app-container'),
  );
};