import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Item } from '../_models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  currentItem: Item;
  idItem;
  
  constructor(
    public http: HttpClient
  ) { }

  getItems(){
    return this.http.get('https://localhost:44303/api/item');
  }

  addItem(item){
    return this.http.post('https://localhost:44303/api/item/', item);
  }

  editItem(id: number, item){
    console.log(item);
    return this.http.put('https://localhost:44303/api/item/'+ id, item);
  }

  deleteItem(id){
    return this.http.delete('https://localhost:44303/api/item/'+ id);
  }
}
