import  React, { Component } from  'react';
import { BrowserRouter } from  'react-router-dom'
import { Route, Link } from  'react-router-dom'
import  PostList  from  './js/PostList'
import Homepage from './js/Homepage'
import VideoPostList from './js/VideoPostList'
import ImagePostList from './js/ImagePostList'
import DocPostList from './js/DocPostList'
import ViewPost from './js/ViewPost'
import UploadPost from './js/UploadPost'
import SearchPost from './js/SearchPosts'
import  './App.css';

import './css/main.css'

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const  BaseLayout  = () => (
<div  className="container-fluid">
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
