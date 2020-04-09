import  React, { Component } from  'react';
import  PostService  from  '../Action/PostService';
import {Link} from 'react-router-dom'
import {Card,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Form,Button} from 'react-bootstrap'
const  postService  =  new  PostService();

class  Login  extends  Component {
  constructor(props) {
      super(props);
      this.state = {
        Username: "",
        Password:"",
        };
  }


  componentDidMount() {
    var self = this;

  }

  handleSubmit = (e) => {

    let form_data = new FormData();

    form_data.append('username', this.state.username);
    form_data.append('password', this.state.password);
    for (var key of form_data.entries()) {
        console.log(key[0] + ', ' + key[1]);
    }
    postService.login(form_data)
      e.preventDefault()
  };

  handleChange = (e) => {
    this.setState({
    [e.target.id]: e.target.value
    })
  };
  render() {

    return (
    <body>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav>
          <Nav.Link ><Link to="/posts/">Docs</Link></Nav.Link>
          <Nav.Link ><Link to="/Upload/">
            Upload
          </Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <div className="jumbotron container ">
      <h1>Login</h1>
      <br />
      <Form onSubmit={this.handleSubmit}>
    <Form.Group controlId="formBasicEmail">
<Form.Control autocomplete="off" id="username"onChange={this.handleChange} type="text" placeholder="Username" />
<br />
      <Form.Control autocomplete="off" id="password"onChange={this.handleChange} type="text" placeholder="Password" />

    </Form.Group>


    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
</div>

          </body>);
}

}

export  default  Login;
