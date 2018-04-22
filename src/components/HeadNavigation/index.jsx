import styles from './style.scss';
import { Grid, Row, Col } from 'react-bootstrap';
import { navigationBaseData } from './config.js';

class HeadNavigation extends React.Component {
  render() {
    const navBase = navigationBaseData.map((data, index) => {
      return (
        <Col sm={2} xs={3} key={index}>
          <a className={styles.linkButton} href={data.href}>{data.content}</a>
        </Col>
      );
    });
    return (
      <div className={styles.navigationContainer}>
        <Grid>
          <Row>
            {navBase}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default HeadNavigation;