import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  items: Observable<any[]>;
  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.items = db.list("guessing_page").valueChanges();
  }

}
