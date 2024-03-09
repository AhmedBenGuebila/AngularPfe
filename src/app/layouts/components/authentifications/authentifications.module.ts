import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthentificationsRoutingModule } from './authentifications-routing.module';
import { AuthentificationsComponent } from './authentifications.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AuthentificationsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthentificationsRoutingModule
  ]
})
export class AuthentificationsModule { }
