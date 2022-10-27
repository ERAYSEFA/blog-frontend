import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../Models/listResponseModel';
import { ResponseModel } from '../Models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  apiUrl = 'https://localhost:44314/api/';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Article>> {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Article>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Article>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Article>>(newPath);
  }

  add(article:Article):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"products/add",article)
  }
}
