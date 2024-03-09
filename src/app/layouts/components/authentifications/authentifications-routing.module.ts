import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationsComponent } from './authentifications.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [{path: '', component: AuthentificationsComponent , children :[
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationsRoutingModule { }
