import  React, { Component } from  'react';
import  PostService  from  '../PostService';

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
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav>
          <Nav.Link href="/posts/">Docs</Nav.Link>
          <Nav.Link href="/Upload/">
            Upload
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
      <div className="jumbotron container ">
      <Form>
    <Form.Group controlId="formBasicEmail">

      <Form.Control autocomplete="off" onChange={this.handleChange} type="text" placeholder="Search" />
      <Form.Text className="text-muted">
        Jump directly to your desired post.
      </Form.Text>
    </Form.Group>


    <Button variant="primary" href={"/searchPost/" + this.state.Query}>
      Submit
    </Button>
  </Form>
</div>

      {/*
      <div style={{marginBottom: "50px"}}class="container">


      <nav class="navbar navbar-expand-lg bg-transparent">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link" href="/posts/">Docs<span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="/upload/">Upload</a>
      </div>
    </div>
  </nav>
  <div class="s003">
  <form>
    <div class="inner-form">
      <div class="input-field first-wrap">
        <div style={{ marginTop: "20px"}} class="input-select">
<span style={{ paddingLeft: "30%"}}>Explore...</span>
        </div>
      </div>
      <div class="input-field second-wrap">
        <input id="Home" autocomplete="off" onChange={this.handleChange} ref="Query"id="search" type="text" placeholder="Enter Keywords?" />
      </div>
      <div class="input-field third-wrap">
        <a href={"/searchPost/" + this.state.Query}><button type="button" class="btn-search" >
          <svg class="svg-inline--fa fa-search fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </button></a>
      </div>
    </div>
  </form>
</div>
      </div>
          */}
          </body>);
}

}

export  default  Homepage;
