import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {  FirebaseListObservable } from "angularfire2/database-deprecated";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items : FirebaseListObservable<any>;
  msg : string ='';

  constructor(public af : AngularFireDatabase){
      this.items = af.list('/messages')
  }
  send(chatMsg:string){
    this.items.push({message:chatMsg});
    this.msg='';
  }
}
