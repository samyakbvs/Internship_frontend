import  React, { Component } from  'react';
import  PostService  from  '../Action/PostService';
import {Link,withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

import * as actions from '../../store/actions/auth';
import {Card,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Form,Button} from 'react-bootstrap'
const  postService  =  new  PostService();

class  Login  extends  Component {
  constructor(props) {
      super(props);
      this.state = {
  username: "",
  password:"",
  };

  }


  componentDidMount() {
    var self = this;

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAuth(this.state.username, this.state.password, false)
    // this.props.history.push('/')
    // let form_data = new FormData();
    //
    // form_data.append('username', this.state.username);
    // form_data.append('password', this.state.password);
    // for (var key of form_data.entries()) {
    //     console.log(key[0] + ', ' + key[1]);
    // }
    // postService.login(form_data)

  };
  // handleSubmit = (e) => {
  //     e.preventDefault();
  //     this.props.form.validateFields((err, values) => {
  //         if (!err) this.props.onAuth(values.username, values.password, false);
  //     });
  //     this.props.history.push('/');
  // }

  handleChange = (e) => {
    this.setState({
    [e.target.id]: e.target.value
    })
  };
  render() {
    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }

    return (
    <body>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav>
          <Nav.Link ><Link to="/">Login</Link></Nav.Link>
          <Nav.Link ><Link to="/Signup">
            SignUp
          </Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <div className="jumbotron container ">
        {errorMessage}
        {
          this.props.loading ?
          <h1>Logging in...</h1>
            :
<div>
          <h1>Login</h1>
          <br />
          <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
    <Form.Control autocomplete="off" id="username"onChange={this.handleChange} type="text" placeholder="Username" />
    <br />
          <Form.Control autocomplete="off" id="password"onChange={this.handleChange} type="password" placeholder="Password" />
<br />
        </Form.Group>


        <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
  </div>
}
</div>

          </body>);
}

}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }
}




export  default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
