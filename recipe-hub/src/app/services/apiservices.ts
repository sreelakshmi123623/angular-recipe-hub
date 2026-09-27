import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Apiservices {

  server_url:string="http://localhost:5000"

  constructor(private http:HttpClient){ }

  // step for api creation

  registerAPI(reqBody:any){
    return this.http.post(`${this.server_url}/register`,reqBody)
  }

  loginAPI(reqBody:any){
    return this.http.post(`${this.server_url}/login`,reqBody)
  }

  // getAllRecipeAPI
  getAllRecipeAPI(){
    return this.http.get(`${this.server_url}/all-recipe`)
  }
  
  addTestimonyAPI(reqBody:any){
    return this.http.post(`${this.server_url}/testimonials/add`,reqBody)
  }

  // appendToken()-req header
  //now we can us appendToken for every requests
  appendToken(){
    const token=sessionStorage.getItem("token")
    let headers=new HttpHeaders()
    headers=headers.append("Authorization",`Bearer ${token}`)
    return {headers}
  }

  // viewrecipeAPI
  // when calling appendToken we will gwt the header
  viewRecipeAPI(recipeId:string){
    return this.http.get(`${this.server_url}/view/${recipeId}`,this.appendToken())
  }

  // relatedRecipeAPI
  
relatedRecipeAPI(cuisine:string){
  return this.http.get(`${this.server_url}/related-recipes?cuisine=${cuisine}`,this.appendToken())
}

// saveRecipeAPI
saveRecipeAPI(recipeId:string,reqBody:any){
  return this.http.post(`${this.server_url}/save-recipe/${recipeId}`,reqBody,this.appendToken())
}

// getSavedRecipeAPI
getSavedRecipeAPI(){
  return this.http.get(`${this.server_url}/save-recipe`,this.appendToken())
}

// deleteSavedRecipeAPI
deleteSavedRecipeAPI(recipeId:string){
  return this.http.delete(`${this.server_url}/save-recipe/${recipeId}/remove`,this.appendToken())
}

// downloadRecipeAPI
downloadRecipeAPI(id:string,reqBody:any){
    return this.http.post(`${this.server_url}/recipe/${id}/download`,reqBody,this.appendToken())

}
// deleteRecipeAPI
deleteRecipeAPI(recipeId:string){
  return this.http.delete(`${this.server_url}/recipe/${recipeId}/delete`,this.appendToken())
}

// getAllUserAPI
getAllUserAPI(){
  return this.http.get(`${this.server_url}/all-users`,this.appendToken())
}

// getAllDownloads
getAllDownloadsAPI(){
    return this.http.get(`${this.server_url}/all-downloads`,this.appendToken())

}

// getAllFeedbacksAPI
getAllFeedbacksAPI(){
      return this.http.get(`${this.server_url}/all-feedbacks`,this.appendToken())

}

// updateFeedbackAPI
updateFeedbackAPI(id:string,status:string){
    return this.http.get(`${this.server_url}${id}/update?status=${status}`,this.appendToken())

}

// getAllApprovedFeedbackAPI
getAllApprovedFeedbackAPI(){
    return this.http.get(`${this.server_url}/approved-feedbacks`)

}



}
