import styles from './style.scss';
import { Grid, Row, Col } from 'react-bootstrap';
import { navigationBaseData } from './config.js';
import SignModal from 'Components/SignModal';

class HeadNavigation extends React.Component {
  state = {
    showModal: false
  }

  handleShowModal = () => {
    this.setState({showModal: true})
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

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
            <Col sm={2} xs={3}>
              <a className={styles.linkButton} onClick={this.handleShowModal}>登录</a>
            </Col>
          </Row>
        </Grid>
        <SignModal
          handleClose={this.handleCloseModal}
          showModal={this.state.showModal}
        />
      </div>
    );
  }
}

export default HeadNavigation;