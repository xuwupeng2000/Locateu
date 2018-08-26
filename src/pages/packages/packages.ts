import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestapiProvider } from '../../providers/restapi/restapi';

/**
 * Generated class for the PackagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-packages',
  templateUrl: 'packages.html',
})
export class PackagesPage {
  pkgs: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestapiProvider) {
    rest.loadPackages().subscribe(
      res => { this.pkgs = res.data; }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PackagesPage');
  }

}
