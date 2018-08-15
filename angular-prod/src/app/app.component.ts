import { Component } from '@angular/core';
import { ItemService } from './item.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-prod';
  items;
  constructor(private itemService:ItemService){
    this.items = this.itemService.items;
   }
   deleteItem(event,item){
    this.itemService.deleteItem(item)
  }
}