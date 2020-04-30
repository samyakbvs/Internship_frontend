import  React, { Component } from  'react';
import  PostService  from  '../Action/PostService';
import {Card,Nav,Navbar,NavDropdown,Dropdown,Button,ListGroup} from 'react-bootstrap'
import {Link,withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

import * as actions from '../../store/actions/auth';
const  postService  =  new  PostService();

class  PostList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        posts: [],
        length: null,
        view: 'Grid',
        type: ''
    };
}

handleView = (e) =>  {
  console.log('clicked')
  var self = this
  if (this.state.view=='Grid') {
    self.setState((state, props) => {
      return {view:'List'};
    });
  }else {
    self.setState((state, props) => {
      return {view:'Grid'};
    });
  }
}



componentDidMount() {
    var  self  =  this;
    const postService = new PostService();
    postService.getPosts().then(function (result) {
          console.log(result);
          self.setState((state, props) => {
            return {
              posts: result.data,
              length: result.data.length,
              type:'All'
            };
          });
      });
}

handleType = (post_type) =>  {
  console.log(this.state.view)
  var self = this
  if (post_type=='Video') {
    postService.getVideoPosts().then(function (result) {
        console.log(result);

        self.setState((state, props) => {
          return {
            posts: result.data,
            length: result.data.length,
            type: post_type
          };
        });
    });
  }
  if (post_type=='All') {
    postService.getPosts().then(function (result) {
        console.log(result);

        self.setState((state, props) => {
          return {
            posts: result.data,
            length: result.data.length,
            type: post_type
          };
        });
    });
  }
  if (post_type=='Image') {
    postService.getImagePosts().then(function (result) {
        console.log(result);

        self.setState((state, props) => {
          return {
            posts: result.data,
            length: result.data.length,
            type: post_type
          };
        });
    });
  }
  if (post_type=='Doc') {
    postService.getDocPosts().then(function (result) {
        console.log(result);

        self.setState((state, props) => {
          return {
            posts: result.data,
            length: result.data.length,
            type: post_type
          };
        });
    });
  }
}


render() {
if (this.state.view == "List") {
  return (

<body >
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">

    <Nav>
      <Nav.Link ><Link to="/posts/">Docs</Link></Nav.Link>
        {this.props.isStaff ?
         <Nav.Link ><Link to="/Upload/">Upload</Link></Nav.Link>
         :
         <span/>

        }
      <Nav.Link onClick={this.props.logout} >
          <Link to="/">Logout</Link>
        </Nav.Link>
        <Nav.Link className="version" >
          v 1.0
          </Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>


<br/>
<br/>


  <Dropdown style={{ float:'right' , marginRight:'90px'}}>
    <Dropdown.Toggle  variant="secondary" id="dropdown-basic">
      Filter by
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item onClick={() => this.handleType('All')} >All</Dropdown.Item>
      <Dropdown.Item onClick={() => this.handleType('Video')} >Videos</Dropdown.Item>
      <Dropdown.Item onClick={() => this.handleType('Image')}>Images</Dropdown.Item>
      <Dropdown.Item onClick={() => this.handleType('Doc')}>Docs</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Button onClick={this.handleView}style={{ float:'right' , marginRight:'20px',backgroundColor:'#6c757d',border: 0}}>
    Toggle View
  </Button>


 <div className="container">

<h1 >{this.state.type} posts</h1>
<h6>Number of posts : {this.state.length}</h6>
<br/>
  <ListGroup variant="flush">
    {this.state.posts.map( c =>
      <ListGroup.Item >
        <Link class="listA" to={"/post/" + c.id}>{c.Name} </Link>
        <span class='text-muted' style={{ fontStyle:'italic',float:'right' }}>{"Posted on " + c.Init_time.substring(0,10) } by samyak</span>
      </ListGroup.Item>


    )}


  </ListGroup>



</div>
</body>
         )

} else {
  return (

<body >
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand ><Link to="/">Home</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">

    <Nav>
      <Nav.Link ><Link to="/posts/">Docs</Link></Nav.Link>
        {this.props.isStaff ?
         <Nav.Link ><Link to="/Upload/">Upload</Link></Nav.Link>
         :
         <span/>

        }
      <Nav.Link onClick={this.props.logout} >
          <Link to="/">Logout</Link>
        </Nav.Link>
        <Nav.Link className="version" >
          v 1.0
          </Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>

<br/>
<br/>


  <Dropdown style={{ float:'right' , marginRight:'90px'}}>
    <Dropdown.Toggle  variant="secondary" id="dropdown-basic">
      Filter by
    </Dropdown.Toggle>

    <Dropdown.Menu>
      <Dropdown.Item onClick={() => this.handleType('All')} >All</Dropdown.Item>
      <Dropdown.Item onClick={() => this.handleType('Video')} >Videos</Dropdown.Item>
      <Dropdown.Item onClick={() => this.handleType('Image')}>Images</Dropdown.Item>
      <Dropdown.Item onClick={() => this.handleType('Doc')}>Docs</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Button onClick={this.handleView}style={{ float:'right' , marginRight:'20px',backgroundColor:'#6c757d',border: 0}}>
    Toggle View
  </Button>

 <div className="container">

   <h1 > {this.state.type} posts</h1>
   <h6>Number of posts : {this.state.length}</h6>
   <br/>
   <div class="row">
     {this.state.posts.map( c =>
<Card key={c.id}style={{minWidth: '18rem',margin:15,maxWidth:'18rem'}}>
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
         )

}

  }
}
const mapDispatchToProps = dispatch => {
	return {
		logout: () => dispatch(actions.logout())
	};
};

export default withRouter(connect(null, mapDispatchToProps)(PostList));
