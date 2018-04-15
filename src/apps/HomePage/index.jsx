import { hot } from 'react-hot-loader';
import styles from './styles.scss';
import AppLayout from '../AppLayout';
import { Grid, Row, Col } from 'react-bootstrap';
import AboutMe from './containers/AboutMe';

const HomePage = () => {
  return (
    <AppLayout>
      <Grid>
        <Row>
          <div className="main-container">
            <Row>
              <Col sm={4}>
                <AboutMe />
              </Col>
              <Col>

              </Col>
            </Row>
          </div>
        </Row>
      </Grid>
    </AppLayout>
  )
};

export default hot(module)(HomePage)