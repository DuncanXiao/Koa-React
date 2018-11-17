import { Button, Form, FormGroup, Col, Checkbox, FormControl } from 'react-bootstrap';
// import { cookies } from 'Utilities/cookies';
import 'whatwg-fetch';
import Modal from 'Components/PopupModal';

class SignModal extends React.Component {
  state = {
    signIn: true,
    email: '',
    password: '',
    name: ''
  }

  handleSignState = () => {
    this.setState((preState)=>({signIn: !preState.signIn}));
  }

  handleSubmit = () => {
    if (this.state.signIn) {
      fetch('/api/login', {
        method: 'Post',
        body: JSON.stringify({
          password: this.state.password,
          email: this.state.email
        })
      }).then(((response) => {
        // cookies.set("token", response.message.token, 1);
      }));
    } else {
      fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.name,
          password: this.state.password,
          email: this.state.email
        })
      })
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.type]: e.target.value });
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
                <FormControl
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Col>
            </FormGroup>
            {
              !this.state.signIn &&
              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <FormControl
                    type="text"
                    placeholder="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
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