import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestapiProvider } from '../../providers/restapi/restapi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pkgs: any

  constructor(public navCtrl: NavController, public rest: RestapiProvider) {
    rest.loadPackages().subscribe(
      res => { this.pkgs = res.data; }
    );
  }

}
