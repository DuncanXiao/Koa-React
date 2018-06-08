import AppLayout from '../AppLayout/index';
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

export default HomePage;