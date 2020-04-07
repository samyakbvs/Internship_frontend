import  React, { Component } from  'react';
import  PostService  from  '../Action/PostService';
import {Form,Button,Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const  postService  =  new  PostService();

class  ViewPost  extends  Component {

  constructor(props) {
  super(props);
  this.state  = {
      post: []
  };
}



componentDidMount(){
var  self  =  this;
const { match: { params } } = this.props;
const postService = new PostService();
postService.getPost(params.id).then(function (result) {
    self.setState({ post:  result.data})
    console.log(result.data)

});
}

  render() {



    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
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
<br/>
      {this.state.post.map(c =>
        <div style= {{width:'70%'}} className="container">




            <div style={{margin:'0 auto'}}>


              <h1 className="mt-4">{c.Name + " "} </h1>


              <p className="lead">

                Posted on <strong>{c.Init_time.substring(0,10)}</strong>   by <strong>{" " + c.Author}</strong>
              </p>

        <hr />


              <p className="lead">{c.Description}</p>

              <hr />
<br/>

          </div>

          <a href={c.Video} download><i style= {{float:'right'},{margin:'10px'}} class="fa fa-play fa-lg"></i></a>
          <a href={c.Image}><i style= {{float:'right'},{margin:'10px'}} class="fa fa-image fa-lg"></i></a>
          <a href={c.Doc}><i style= {{float:'right'},{margin:'10px'}} class="fa fa-file fa-lg"></i></a>
        </div>



      )}
      </div>
           );
}

}

export  default  ViewPost;
