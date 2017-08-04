import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

	@ViewChild('email') email;
	@ViewChild('password') password;

  constructor(private fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,
  	private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  register() {
    this.fire.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then(data => {
      console.log('got data ', data);
      this.alert('Registered!');
      this.navCtrl.push(LoginPage);
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);

    });
    console.log('Would register user with ', this.email, this.password);
  }

}
