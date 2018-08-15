import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-prod';
  items: Observable<any[]>;

  constructor(private db: AngularFirestore){
    this.items = db.collection('items').valueChanges();
  }
}
