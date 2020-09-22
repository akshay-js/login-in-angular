import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './profile/dashboard/dashboard.component';
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }