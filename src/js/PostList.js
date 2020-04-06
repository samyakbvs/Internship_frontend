import  React, { Component } from  'react';
import  PostService  from  '../PostService';
import {Card,Nav,Navbar,NavDropdown} from 'react-bootstrap'
const  postService  =  new  PostService();

class  PostList  extends  Component {

constructor(props) {
    super(props);
    this.state  = {
        posts: [],
    };
}

componentDidMount() {
    var  self  =  this;
    const postService = new PostService();
    postService.getPosts().then(function (result) {
        console.log(result);
        self.setState({ posts:  result.data})
    });
}
render() {

  return (
<body >
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Home</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

      <Nav>
        <Nav.Link href="/posts/">Docs</Nav.Link>
        <Nav.Link href="/Upload/">
          Upload
        </Nav.Link>
        <NavDropdown title="Filter by" id="collasible-nav-dropdown">
  <NavDropdown.Item href="/posts/videos/">Videos</NavDropdown.Item>
  <NavDropdown.Item href="/posts/images/">Images</NavDropdown.Item>
  <NavDropdown.Item href="/posts/doc/">Docs</NavDropdown.Item>

</NavDropdown>

      </Nav>
    </Navbar.Collapse>
    </Navbar>
<br/>
<br/>

           {/*
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
         <div className="dropdown">
       <button type="button" className="btn dropdown-toggle" data-toggle="dropdown">
         Filter by
       </button>
       <div className="dropdown-menu">
       <a className="dropdown-item" href="/posts/">All</a>
         <a className="dropdown-item" href="/posts/videos/">Videos</a>
         <a className="dropdown-item" href="/posts/images/">Images</a>
         <a className="dropdown-item" href="/posts/doc/">Docs</a>
       </div>
     </div>
<div className="row">
{this.state.posts.map( c =>

<div key= {c.id} className="col-lg-8 col-md-10 mx-auto">
  <div className="post-preview">
    <a href={"/post/" + c.id}>
   <h2 className="post-title">
        {c.Name}
      </h2>
      <h3 className="post-subtitle">
        {c.Description.substring(0,10) + "..."}
      </h3>
    </a>
    <p className="post-meta">Posted by
        { " " + c.Author + " " }

      on {" " + c.Init_time.substring(0,10)}</p>
  </div>
  <hr></hr>


</div>

)};

</div>
*/}
 <div className="container">
   <h1>All posts</h1>
   <div class="row">
     {this.state.posts.map( c =>
<Card key={c.id}style={{minWidth: '18rem',margin:10,maxWidth:'18rem'}}>
  <Card.Body >
    <Card.Title>{c.Name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{" " + c.Init_time.substring(0,10)}</Card.Subtitle>
    <Card.Text>
  {c.Description.substring(0,10) + "..."}
    </Card.Text>
    <Card.Link href={"/post/" + c.id}>Details</Card.Link>

  </Card.Body>
</Card>
)}

</div>


</div>
</body>
         )
  }
}
export  default  PostList;
