import axios from 'axios';

const URL = 'http://localhost:3000/collection';
export default {
  makeRequest(method,route, data){
    //generalizes the reques making and handles an error.
    //sends back the response to be handled.
    let responseValue= axios({
      method: method,
      url: URL+route,
      data: data
    }).catch(function(e){
      console.log(e)
    })
    return responseValue;
  },
  getHome(){
    let response =  this.makeRequest('get','/',null);
    return response;
  },
  getFilms () {
    //Recieves array of {_id, year, place,size}
    return this.makeRequest('get','/films',null);
  },
  createFilm (data) {
    if(data.photos){
      //this is for the case we wanna create several pictures aside from the actual film.
      return {photos: this.makeRequest('post','/bulkPhotoCreate',data.film._id),
              film: this.makeRequest('post', `/film/create`, data)}
    }
    //this is in case we wanna just create a film without photos
    return this.makeRequest('post', `/film/create`, data);
  },
  updateFilm (id,data) {
    return this.makeRequest('post', `/film/${id}/update`, data);
  },
  readFilm (id) {
    return this.makeRequest('get', `/film/${id}`, null);
  },
  deleteFilm (id) {
    return this.makeRequest('post', `/film/${id}/delete`, null);
  },
  getPhotos () {
    return this.makeRequest('get','/photos',null);
  },
  createPhoto (data) {
    return this.makeRequest('post', '/photo/create', data);
  },
  updatePhoto (id,data) {
    return this.makeRequest('post', `/photo/${id}/update`, data);
  },
  readPhoto (id) {
    return this.makeRequest('get', `/photo/${id}`, null);
  },
  deletePhoto (id) {
    return this.makeRequest('post', `/photo/${id}/delete`, null);
  },
}