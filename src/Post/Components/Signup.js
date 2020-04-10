import  React, { Component } from  'react';
import  PostService  from  '../Action/PostService';
import {Link,withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

import * as actions from '../../store/actions/auth';
import {Card,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Form,Button} from 'react-bootstrap'
const  postService  =  new  PostService();

class  Signup  extends  Component {
  constructor(props) {
      super(props);
      this.state = {
  username: "",
  password:"",
  verifypassword:"",
  email:""
  };

  }


  componentDidMount() {
    var self = this;

  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.history.push('/');
    this.props.onAuth(this.state.username,this.state.email ,this.state.password,this.state.verifypassword, false)
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
          <h1>loading</h1>
            :
<div>
          <h1>SignUp</h1>
          <br />
          <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
    <Form.Control autocomplete="off" id="username"onChange={this.handleChange} type="text" placeholder="Username" />
    <br />
    <Form.Control autocomplete="off" id="email"onChange={this.handleChange} type="text" placeholder="Email" />

<br />
          <Form.Control autocomplete="off" id="password"onChange={this.handleChange} type="password" placeholder="Password" />
        <  br />
  <Form.Control autocomplete="off" id="verifypassword"onChange={this.handleChange} type="password" placeholder="Verify Password" />
    <  br />
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
        onAuth: (username, email,password1,password2) => (

          dispatch(actions.authSignup(username,email, password1,password2))
        )
    }
}

export  default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
