import { Button, Form, FormGroup, Col, Checkbox, FormControl } from 'react-bootstrap';
import 'whatwg-fetch';
import Modal from 'Components/PopupModal';

class SignModal extends React.Component {
  state = {
    signIn: true
  }

  handleSignState = () => {
    this.setState((preState)=>({signIn: !preState.signIn}));
  }

  handleSubmit = () => {
    if (this.state.signIn) {
      fetch()
    } else {
      fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
          name: 'haha',
          password: 'sss'
        })
      })
    }
  }

  render() {
    const {handleClose, showModal} = this.props;
    return (
      <Modal
        handleClose={handleClose}
        showModal={showModal}
        showCloseButton={false}
      >
        <div type="title">
          {this.state.signIn ? '登录' : '注册'}
        </div>
        <div type="body">
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>
            {
              this.state.signIn &&
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>Remember me</Checkbox>
                </Col>
              </FormGroup>
            }
            <Button onClick={this.handleSubmit}>确认</Button>
          </Form>
        </div>
        <div type="footer">
          <Button onClick={this.handleSignState}>
            登录
          </Button>
          <Button onClick={this.handleSignState}>
            注册
          </Button>
          <Button onClick={handleClose}>
            关闭
          </Button>
        </div>
      </Modal>
    )
  }
};

export default SignModal;