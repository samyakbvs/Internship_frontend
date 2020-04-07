import axios from 'axios';
import $ from 'jquery';

export default class PostService {
  constructor(){}


  getPosts(){
    const url = `http://localhost:8000/post/`
    return axios.get(url).then(
      response => response.data
    );

  }

  getVideoPosts(){
    const url = `http://localhost:8000/post/videos/`
    return axios.get(url).then(
      response => response.data
    );
  }

  getImagePosts(){
    const url = `http://localhost:8000/post/images/`
    return axios.get(url).then(
      response => response.data
    );
  }

  getDocPosts(){
    const url = `http://localhost:8000/post/docs/`
    return axios.get(url).then(
      response => response.data
    );
  }

  getPost(id){
    const url = `http://localhost:8000/post/${id}/`;
    return axios.get(url).then(
      response => response.data
    );
  }

  createPost(post){

    const url = `http://localhost:8000/post/`;
    return axios.post(url,post,{headers: {  'content-type': 'multipart/form-data'  }}).then((result)=>{

          if (!$("#SubmitText").hasClass("ops")) {
  $("#SubmitText").addClass("ops")
          }

        }).catch(()=>{
          $("#SubmitText").removeClass("ops")
        });

}
  searchPosts(query){
    const url = `http://localhost:8000/post/${query}/`;
    return axios.get(url).then(
      response => response.data
    );
  }

  login(login_credentials){

    const url = `http://localhost:8000/post/login/`;
    return axios.post(url,login_credentials,{headers: {  'content-type': 'multipart/form-data'  }}).then((result)=>{



        }).catch(()=>{

        });

}

}
