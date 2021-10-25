import axios from 'axios';
import { Film } from './types';

let methods={
  GET:'get',
  POST:'post'
}
const URL = 'http://localhost:4000/collection';
export default {
  makeRequest(METHOD:string,route:string, data:any){
    //generalizes the reques making and handles an error.
    //sends back the response to be handled.
    let responseValue= axios({
      method: methods[METHOD],
      url: URL+route,
      data: data
    }).catch(function(e){
      console.log(METHOD)
      console.log(route)
      console.log(data._id)
      console.log(e)
      
    })
    return responseValue;
  },
  getHome(){
    let response =  this.makeRequest('GET','/',null);
    return response;
  },
  getFilms (){
    //Recieves array of {_id, year, place,size}
    return this.makeRequest('GET','/films',null);
  },
  createFilm (film:Film) {
    // Needs A complete film with all its pictures.
    console.log('have to send this film:')
    console.log(film)
    return  this.makeRequest('POST', '/film/create', film)
  },
  updateFilm (film:Film) {
    return this.makeRequest('POST', `/film/${film._id}/update`, film);
  },
  readFilm (_id:Film['_id']) {
    return this.makeRequest('GET', `/film/${_id}`, null);
  },
  deleteFilm (_id:Film['_id']) {
    return this.makeRequest('POST', `/film/${_id}/delete`, null);
  },
  getPhotos () {
    return this.makeRequest('GET','/photos',null);
  },
  createPhoto (data) {
    return this.makeRequest('POST', '/photo/create', data);
  },
  updatePhoto (id,data) {
    return this.makeRequest('POST', `/photo/${id}/update`, data);
  },
  readPhoto (id) {
    return this.makeRequest('GET', `/photo/${id}`, null);
  },
  deletePhoto (id) {
    return this.makeRequest('POST', `/photo/${id}/delete`, null);
  },
}