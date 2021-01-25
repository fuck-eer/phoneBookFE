import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainDispAreaComponent } from './main-disp-area/main-disp-area.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ConnectReqComponent } from './homepage/connect-req/connect-req.component';
import { ContactsComponent } from './homepage/contacts/contacts.component';
import { ConnListElComponent } from './homepage/connect-req/conn-list-el/conn-list-el.component';
import { PhnListComponent } from './homepage/contacts/phn-list/phn-list.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MainHeaderComponent,
    MainDispAreaComponent,
    HomepageComponent,
    LoginpageComponent,
    ConnectReqComponent,
    ContactsComponent,
    ConnListElComponent,
    PhnListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
