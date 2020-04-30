import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  PostList  from  './Post/Components/PostList'
import Homepage from './Post/Components/Homepage'
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
          <Route  {...this.props}path="/"  exact  component={(props) => <Homepage {...this.props}  />}/>

        <Route  {...this.props}path="/posts/"  exact  component={(props) => <PostList {...this.props}  />}  />
        <Route {...this.props} path="/post/:id"  exact  component={(props) => <ViewPost {...this.props}  />}  />
        { this.props.isStaff ?
          <Route  {...this.props}path="/upload"  exact  component={(props) => <UploadPost {...this.props}  />}  />

          :
          <span/>
        }
        <Route  {...this.props}path="/searchPost/:query"  exact  component={(props) => <SearchPost {...this.props}  />}  />
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
		isAuthenticated: state.token !== null,
    isStaff: state.is_staff
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onTryAutoSignup: () => dispatch(actions.authCheckState())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
