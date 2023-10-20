import { NgModule } from '@angular/core';
import { LoginComponent } from '../../components/login/login.component';
import { LoginService } from '../../services/login/login.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent, 
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }