import { hot } from 'react-hot-loader';
import styles from './styles.scss';
import HeadNavigation from 'Components/HeadNavigation';
const App = () =>
  <div>
    <HeadNavigation />
  </div>;

export default hot(module)(App)