import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
@Injectable()
export class taskService {
  url="http://localhost:3000/items";
  constructor(private http: HttpClient) { }
  
  getList()
  {
    return this.http.get(this.url);
  }

  addItem(data){
   return this.http.post(this.url,data);
  }

  getItemById(id)
  {
    return this.http.get(this.url+'/'+id)
  }

  removeItem(id)
  {
    return this.http.delete(`${this.url}/${id}`)
  }
  
  updateItem(id,data){
    return this.http.patch(`${this.url}/${id}`,data)
  }
  
  withdrawItem(id,data){
    return this.http.patch(`${this.url}/${id}/withdraw/${data}`,{id,data},{responseType: 'text'}) 
  }

  depositItem(id,data){
    return this.http.patch(`${this.url}/${id}/deposit/${data}`,{id,data},{responseType: 'text'}) 
  }
    
}