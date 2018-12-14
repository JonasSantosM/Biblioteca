import { LoginProvider } from './../../providers/login/login';
import { LoginPage } from './../login/login';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  login: Usuario;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private loginProvider: LoginProvider) {
    this.login = new Usuario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  CreateAccount(){

    if(this.login.senha == this.senha){

    this.loginProvider.createAccount(this.login.email, this.login.senha, this.login.apelido, this.login.dataNascimento)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário criado com sucesso.'}).present();
        this.GoToPerfil();
        
        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao criar o usuário.'}).present();
      });
    }else{
      this.toast.create({ message: 'Senhas não correspondentes.'}).present();
    }
  }

  GoToPerfil(){

    this.navCtrl.setRoot(HomePage);
  }

  GoToHome(){

    this.navCtrl.setRoot(LoginPage);
  }  

}


export class Usuario{
  id: number;
  email: string;
  senha: string;
  apelido: string;
  dataNascimento: any;
}