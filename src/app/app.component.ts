import { Component} from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { FooterComponent } from './footer/footer.component';

import '../assets/css/styles.css';

@Component({
    selector: 'my-app',
    //templateUrl: './app.component.html',
    template: `<router-outlet></router-outlet>
               <footer-component></footer-component>`,
    styles: [ require('./app.component.less') ],
})

export class AppComponent{
  public constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
