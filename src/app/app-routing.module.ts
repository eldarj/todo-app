import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from './page/login-page/login-page.component';
import {TodoPageComponent} from './page/todo-page/todo-page.component';


const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: TodoPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
