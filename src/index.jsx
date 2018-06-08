import HomePage from 'Apps/HomePage/index';
import { hot } from 'react-hot-loader';

const Page = hot(module)(HomePage);
ReactDOM.render(
  <Page />,
  document.getElementById('app-container'),
);
