import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { classNames } from 'classnames/bind';
import _ from 'underscore';
import styles from './style.scss';

class PopupModal extends React.Component {

  render() {
    const { classProps, showHeader, showCloseButton, showModal, handleClose } = this.props;
    const { container } = classProps;
    return (
      <div className={`modalContainer ${container}`}>
        <Modal show={showModal} onHide={handleClose}>
          {
            showHeader &&
            <Modal.Header closeButton>
              <Modal.Title>
                {
                  React.Children.map(this.props.children, (child) => {
                    if (child.props.type === 'title') {
                      return child
                    }
                  })
                }
              </Modal.Title>
            </Modal.Header>
          }
          <Modal.Body>
            {
              React.Children.map(this.props.children, (child) => {
                if (child.props.type === 'body') {
                  return child
                }
              })
            }
          </Modal.Body>
          <Modal.Footer>
            {
              React.Children.map(this.props.children, (child) => {
                if (child.props.type === 'footer') {
                  return child
                }
              })
            }
            {
              showCloseButton &&
              <Button onClick={handleClose}>Close</Button>
            }
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

PopupModal.propTypes = {
  classProps: PropTypes.object,
  showFooter: PropTypes.bool,
  showHeader: PropTypes.bool,
  showModal: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  handleClose: PropTypes.func
};

PopupModal.defaultProps = {
  classProps: {
    container: '',
    title: ''
  },
  showHeader: true,
  showCloseButton: true
};

export default PopupModal;