import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiProvider } from '../../providers/restapi/restapi';
import { ContactPage } from '../../pages/contact/contact';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string;
  password: string;

  constructor(public navCtrl: NavController, public rest: RestapiProvider) {
  }

  login() {
    this.rest.loginUser({ auth: {username: this.username, password: this.password} }).subscribe(
      res => {
        let user = res.data;
        this.navCtrl.push(ContactPage);
      }
    );

  }

}
