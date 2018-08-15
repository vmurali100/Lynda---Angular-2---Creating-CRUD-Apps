import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from 'angularfire2/firestore';
import { Item } from './item';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items: Observable<any[]>;
  itemCollection: AngularFirestoreCollection<Item>;
  itemDoc:AngularFirestoreDocument<Item>;
  constructor(private db: AngularFirestore) { 
    this.itemCollection=db.collection('items')
    this.items = db.collection('items').snapshotChanges().map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as Item ;
        data.id = a.payload.doc.id;
        return data;
      })
    })
  }
  
  addItem(item :Item){
    this.itemCollection.add(item)
  }
  deleteItem(item){
    this.itemDoc = this.db.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }
  updateitem(item){
    this.itemDoc = this.db.doc(`items/${item.id}`);
    this.itemDoc.update(item)
  }
}