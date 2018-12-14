import { ForumPage } from './../pages/forum/forum';
import { AulasPage } from './../pages/aulas/aulas';
import { ConfiguracaoPage } from './../pages/configuracao/configuracao';
import { AcervoPage } from './../pages/acervo/acervo';
import { HomePage } from './../pages/home/home';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { IntroPage } from './../pages/intro/intro';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Tabs, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { destroyView } from '@angular/core/src/view/view';

@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {

  @ViewChild(Nav) navCtrl:Nav;

  rootPage:any =IntroPage;

  pages: Array<{title: string, component: any}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  
  }

  Configuracao(){
    this.navCtrl.setRoot(ConfiguracaoPage);
    
  }

  Aulas(){

    this.navCtrl.setRoot(AulasPage);
  }

  Forum(){

    this.navCtrl.setRoot(ForumPage);
  }
  
  Sair(){
    this.navCtrl.setRoot(LoginPage);
    this.navCtrl._sbEnabled = false;  
  }
  
}
