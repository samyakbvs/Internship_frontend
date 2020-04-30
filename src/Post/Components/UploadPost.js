import  React, { Component } from  'react';
import  PostService  from  '../Action/PostService';
import $ from 'jquery';
import {Link,withRouter} from 'react-router-dom'
import { connect } from 'react-redux';

import * as actions from '../../store/actions/auth';
import {Form,Col,Button,Navbar,Nav,NavDropdown,InputGroup} from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

import bsCustomFileInput from 'bs-custom-file-input'

const  postService  =  new  PostService();


class  UploadPost  extends  Component {




constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Init_time: "",
      Author: "",
      Description: "",
      Video: null,
      Image: null,
      Doc: null

      };
this.handleSubmit = this.handleSubmit.bind(this)
}

componentDidMount() {

  $(document).ready(function () {
    bsCustomFileInput.init()
  })
}

validateName = (Name) => {
  if (Name.length < 5){
    return false
  }
  var regex = /^[A-Za-z ]+$/
  if (!regex.test(Name.replace(" ",""))) {
    return false
  }
  return true
}

validateAuthor = (Author) => {
  if (Author.length < 5){
    return false
  }
  var regex = /^[A-Za-z ]+$/
  if (!regex.test(Author.replace(" ",""))) {
    return false
  }
  return true
}

validateDescription = (Description) => {
  if (Description.length < 20){
    return false
  }
  return true
}

handleChange = (e) => {
  var validator = false
  if (e.target.id === "Name") {
    if (this.validateName(e.target.value)) {
      validator = true
      $("#"+e.target.id+"Text").addClass("ops")
    }else{
      $("#"+e.target.id+"Text").removeClass("ops")

    }
  }
  if (e.target.id === "Author") {
    if (this.validateAuthor(e.target.value)) {
      validator = true
      $("#"+e.target.id+"Text").addClass("ops")
    }else{
      $("#"+e.target.id+"Text").removeClass("ops")
    }
  }
  if (e.target.id === "Description") {
    if (this.validateDescription(e.target.value)) {
      validator = true
      $("#"+e.target.id+"Text").addClass("ops")
    }else{
      $("#"+e.target.id+"Text").removeClass("ops")
    }
  }
  if (validator) {
    this.setState({
      [e.target.id]: e.target.value
    })
  } else {
console.log("blah")
  }


};

handleFileChange = (e) => {
  this.setState({
  [e.target.id]: e.target.files[0]

  })
  console.log(e.target.id)
};

handleSubmit = (e) => {
  var today = new Date()
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + "T" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() +"Z";

  let form_data = new FormData();

  form_data.append('Name', this.state.Name);
  form_data.append('Init_time', date);
  form_data.append('Author', this.state.Author);
  form_data.append('Description', this.state.Description);
  if (this.state.Video != null) {
    form_data.append('Video', this.state.Video, this.state.Video.name);
  }
if (this.state.Image != null) {
  form_data.append('Image', this.state.Image, this.state.Image.name);

}
if (this.state.Doc != null) {
  form_data.append('Doc', this.state.Doc, this.state.Doc.name);
}


console.log(this.state)
postService.createPost(form_data)

  e.preventDefault()
  // this.props.history.push("/posts/")



};


onChangeHandler=event=>{

}


render() {


    return (


    <body className="uploadBody">


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

    <div style={{backgroundColor:'#e9ecef',borderRadius: 20}}className="container">


    <Form style={{marginTop:50,padding:30}} onSubmit =  {this.handleSubmit}>
  <h2> Upload (video / image / document)</h2>
  <br/>
      <Form.Row>
        <Form.Group as={Col} >

          <Form.Control type="text" placeholder="Title" id="Name"
          onChange = {this.handleChange}
          autoComplete = "off"
          />
        <Form.Text id="NameText" className="text-muted ops">
      Min length - 5 & No special chars allowed
    </Form.Text>
        </Form.Group>


        <Form.Group as={Col} >

          <Form.Control type="text" placeholder="Author" id="Author"
          onChange = {this.handleChange}
          autoComplete = "off"
          />
        <Form.Text id="AuthorText" className="text-muted ops">
      Min length - 5 & No special chars allowed
    </Form.Text>
        </Form.Group>
      </Form.Row>

      <Form.Group >

        <Form.Control as="textarea" rows="3" placeholder="Description" id="Description"
        onChange = {this.handleChange}
        autoComplete = "off"
        />
      <Form.Text id="DescriptionText"className="text-muted ops">
    Min length - 20
  </Form.Text>
      </Form.Group>



      <Form.Row >
        <Form.Group as={Col} controlId="formGridCity">
        <Form.File
        onChange = {this.handleFileChange}
           id="Video"

           label="Video"
           data-browse="Add"
            accept=".mp4,.mkv,.avi,.mov"
           custom
         />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
        <Form.File
        onChange = {this.handleFileChange}
           id="Image"
           label="Image"
           data-browse="Add"
           accept=".gif,.jpg,.jpeg,.png,.svg"

           custom


         />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
        <Form.File
          onChange = {this.handleFileChange}
           id="Doc"
           label="Docs"
           data-browse="Add"
           accept=".docx,.pages,.py"
           custom

         />
        </Form.Group>
      </Form.Row>
      <br/>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      <Form.Text id="SubmitText" className="text-muted ops">
    Please Re-Check your form
  </Form.Text>
    </Form>


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

export default withRouter(connect(null, mapDispatchToProps)(UploadPost));
