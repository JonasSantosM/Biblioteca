import { LoginProvider } from './../../providers/login/login';
import { TabsPage } from './../tabs/tabs';
import { HomePage, User } from './../home/home';
import { CadastroPage } from './../cadastro/cadastro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  Login: Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams,public LoginProvider: LoginProvider,private toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  GoToCadastro(){

    this.navCtrl.push(CadastroPage);
  }

  GoToPerfil(){

    this.navCtrl.push(HomePage);
    
  }

}

export class Usuario{
  id: number;
  email: string;
  senha: string;
  apelido: string;
  dataNascimento: any;
}