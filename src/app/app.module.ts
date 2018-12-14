import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConfiguracaoPage } from './../pages/configuracao/configuracao';
import { AcervoPage } from './../pages/acervo/acervo';
import { ForumPage } from './../pages/forum/forum';
import { AulasPage } from './../pages/aulas/aulas';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { LoginPage } from './../pages/login/login';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { LoginProvider } from '../providers/login/login';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    LoginPage,
    CadastroPage,
    AulasPage,
    ForumPage,
    AcervoPage,
    ConfiguracaoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    LoginPage,
    CadastroPage,
    AulasPage,
    ForumPage,
    AcervoPage,
    ConfiguracaoPage,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider
  ]
})
export class AppModule {}
