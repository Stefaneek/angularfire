import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
 
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 
// AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyAHDJbGtWkAsADtwaYX_9e62qqyMnmT9lk",
  authDomain: "af2-list-a8a9e.firebaseapp.com",
  databaseURL: "https://af2-list-a8a9e.firebaseio.com",
  projectId: "af2-list-a8a9e",
  storageBucket: "",
  messagingSenderId: "383918312240"
};
 
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}