//Installed modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from  '@angular/router';
import { TranslateModule } from 'ng2-translate';

//Custom common components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

//Custom components that acts as page containers
import { HomeComponent } from '../home/home.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        TranslateModule.forRoot(),
        RouterModule.forRoot( appRoutes )
    ],
    declarations: [
        AppComponent,
        FooterComponent,

        HomeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
