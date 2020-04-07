import  React, { Component } from  'react';
import  PostService  from  '../Action/PostService';
import {Card,Nav,Navbar,NavDropdown,Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const  postService  =  new  PostService();

class  DocPostList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        posts: [],
    };
}

componentDidMount() {
    var  self  =  this;
    const postService = new PostService();
    postService.getDocPosts().then(function (result) {
        console.log(result);
        self.setState({ posts:  result.data})
    });
}

render(){
  return(

    <body >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link to="/account/">Home</Link></Navbar.Brand>
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
    <br/>
    <br/>
    <Dropdown style={{ float:'right' , marginRight:'90px'}}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Filter by
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item ><Link to="/account/posts/videos/">Videos</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/account/posts/images/">Images</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/account/posts/doc/">Docs</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
     <div className="container">
       <h1>Doc posts</h1>
       <div class="row">
         {this.state.posts.map( c =>
    <Card key={c.id}style={{minWidth: '18rem',margin:10,maxWidth:'18rem'}}>
      <Card.Body >
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

export  default  DocPostList;
