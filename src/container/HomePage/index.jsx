import { hot } from 'react-hot-loader';
import styles from './styles.scss';
import B from './aaa';
const App = () =>
  <div>
    <h1 className={styles.helloWord}>Hello World</h1>
    <B/>
  </div>;

export default hot(module)(App)