import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms'

export const firebaseConfig = {
  apiKey: "AIzaSyACUAZKzCuHywAugcb09QfSkSv3ITR6cfk",
    authDomain: "chatapp-658c2.firebaseapp.com",
    databaseURL: "https://chatapp-658c2.firebaseio.com",
    projectId: "chatapp-658c2",
    storageBucket: "chatapp-658c2.appspot.com",
    messagingSenderId: "652366619334"
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
