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
// import Login from './Post/Components/Login'
import  './App.css';

import './css/main.css'

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const  BaseLayout  = () => (
<div  className="container-fluid">
    <div  className="content">
        <Route  path="/account/"  exact  component={Homepage}  />
        <Route  path="/account/posts/"  exact  component={PostList}  />
        <Route  path="/account/posts/videos"  exact  component={VideoPostList}  />
        <Route  path="/account/posts/images"  exact  component={ImagePostList}  />
        <Route  path="/account/posts/doc"  exact  component={DocPostList}  />
        <Route  path="/account/post/:id"  exact  component={ViewPost}  />
        <Route  path="/account/upload"  exact  component={UploadPost}  />
        <Route  path="/account/searchPost/:query"  exact  component={SearchPost}  />
    </div>
</div>
)

class  App  extends  Component {

render() {
    return (
    <BrowserRouter>
        <BaseLayout/>
    </BrowserRouter>
    );
}
}
export  default  App;
