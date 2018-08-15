import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-prod';
  items;
  editState:boolean = false;
  itemToEdit:Item;
  constructor(private itemService:ItemService){
    this.items = this.itemService.items;
   }
   deleteItem(event,item){
    this.itemService.deleteItem(item)
  }
  editItem(event,item){
   this.editState=true;
   this.itemToEdit=item; 
  }
  updateItem(item){
    this.itemService.updateitem(item)
  }
}  