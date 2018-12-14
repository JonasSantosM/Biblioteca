import { LoginProvider } from './../../providers/login/login';
import { ConfiguracaoPage } from './../configuracao/configuracao';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LoginPage } from './../login/login';
import { c } from '@angular/core/src/render3';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  model:any[];
  @ViewChild(HomePage) infiniteScroll: HomePage;

  constructor(public navCtrl: NavController, private toast: ToastController, private userProvider: LoginProvider) {


  }

  abrirTela(){

    this.navCtrl.push(ConfiguracaoPage);
  }

}

export class User{

  Email: string;
  Apelido: string;
  Senha: string;
  DataNascimento: any;

}