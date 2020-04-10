import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  PostList  from  './Post/Components/PostList'
import Homepage from './Post/Components/Homepage'
import VideoPostList from './Post/Components/VideoPostList'
import ImagePostList from './Post/Components/ImagePostList'
import DocPostList from './Post/Components/DocPostList'
import ViewPost from './Post/Components/ViewPost'
import UploadPost from './Post/Components/UploadPost'
import SearchPost from './Post/Components/SearchPosts'
import Login from './Post/Components/Login'
import Signup from './Post/Components/Signup'
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';
// import Login from './Post/Components/Login'
import  './App.css';

import './css/main.css'

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'


class BaseLayout extends React.Component {
    render() {
        return (
<div  className="container-fluid">
  {this.props.isAuthenticated ?

    <div  className="content">
          <Route  path="/"  exact  component={Homepage}  />
        <Route  path="/posts/"  exact  component={PostList}  />
        <Route  path="/posts/videos"  exact  component={VideoPostList}  />
        <Route  path="/posts/images"  exact  component={ImagePostList}  />
        <Route  path="/posts/doc"  exact  component={DocPostList}  />
        <Route  path="/post/:id"  exact  component={ViewPost}  />
        <Route  path="/upload"  exact  component={UploadPost}  />
        <Route  path="/searchPost/:query"  exact  component={SearchPost}  />
        </div>
        :
        <div  className="content">

            <Route  path="/"  exact  component={Login}  />
            <Route  path="/signup"  exact  component={Signup}  />

        </div>

  }



</div>
);
}
}

class  App  extends  Component {
  componentDidMount () {
		this.props.onTryAutoSignup();
	}


render() {
    return (
    <BrowserRouter {...this.props} >
        <BaseLayout {...this.props}/>
    </BrowserRouter>
    );
}


}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.token !== null
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignup: () => dispatch(actions.authCheckState())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
