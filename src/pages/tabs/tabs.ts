import { ForumPage } from './../forum/forum';
import { AcervoPage } from './../acervo/acervo';
import { AulasPage } from './../aulas/aulas';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AulasPage;
  tab3Root = AcervoPage;
  tab4Root = ForumPage;

  constructor() {

  }
}
