import  React, { Component } from  'react';
import  PostService  from  '../Action/PostService';
import {Link} from 'react-router-dom'
import {Card,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Form,Button} from 'react-bootstrap'
const  postService  =  new  PostService();

class  Homepage  extends  Component {
  constructor(props) {
      super(props);
      this.state = {
        Query: ""

        };
  }


  componentDidMount() {
    var self = this;

  }


  handleChange = (e) => {
    this.setState({
      Query: e.target.value
    })
  };
  render() {

    return (
    <body>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand ><Link to="/account/">Home</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav>
          <Nav.Link ><Link to="/account/posts/">Docs</Link></Nav.Link>
          <Nav.Link ><Link to="/account/Upload/">
            Upload
          </Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <div className="jumbotron container ">

        <h1>Learning Management System</h1>
        <br />
      <Form>
    <Form.Group controlId="formBasicEmail">

      <Form.Control autocomplete="off" onChange={this.handleChange} type="text" placeholder="Search" />
      <Form.Text className="text-muted">
        Jump directly to your desired post.
      </Form.Text>
    </Form.Group>


    <Button variant="primary" to={"/searchPost/" + this.state.Query}>
      Submit
    </Button>
  </Form>
</div>

          </body>);
}

}

export  default  Homepage;