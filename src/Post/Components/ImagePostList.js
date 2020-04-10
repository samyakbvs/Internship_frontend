import  React, { Component } from  'react';
import  PostService  from  '../Action/PostService';
import {Card,Nav,Navbar,NavDropdown,Dropdown} from 'react-bootstrap'
import {Link,withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

import * as actions from '../../store/actions/auth';
const  postService  =  new  PostService();

class  ImagePostList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        posts: [],
    };
}

componentDidMount() {
    var  self  =  this;
    const postService = new PostService();
    postService.getImagePosts().then(function (result) {
        console.log(result);
        self.setState({ posts:  result.data})
    });
}

render(){
  return(

    <body >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav>
            <Nav.Link ><Link to="/posts/">Docs</Link></Nav.Link>
            <Nav.Link ><Link to="/Upload/">
              Upload
            </Link></Nav.Link>
            <Nav.Link onClick={this.props.logout} >
                <Link to="/">Logout</Link>
              </Nav.Link>


          </Nav>
        </Navbar.Collapse>
        </Navbar>
    <br/>
    <br/>


    <Dropdown style={{ float:'right' , marginRight:'90px'}}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Filter by
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link to="/posts/videos/">Videos</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/posts/images/">Images</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/posts/doc/">Docs</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
     <div className="container">
       <h1>Image posts</h1>
       <div class="row">
         {this.state.posts.map( c =>
    <Card key={c.id}style={{minWidth: '18rem',margin:10,maxWidth:'18rem'}}>
      <Card.Body>
        <Card.Title>{c.Name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{" " + c.Init_time.substring(0,10)}</Card.Subtitle>
        <Card.Text>
      {c.Description.substring(0,10) + "..."}
        </Card.Text>
        <Card.Link><Link  to={"/post/" + c.id}>Details</Link></Card.Link>

      </Card.Body>
    </Card>
    )}

    </div>


    </div>
    </body>
  );
}

}

const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(actions.logout())
	};
};

export default withRouter(connect(null, mapDispatchToProps)(ImagePostList));
