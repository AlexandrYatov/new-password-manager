import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { AddCardComponent} from './components/add-card/add-card.component';
import {EditCardComponent} from "./components/edit-card/edit-card.component";
import {AuthGuard} from './guard/auth.guard';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";



const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-card', component: AddCardComponent, canActivate: [AuthGuard]},
  { path: 'edit-card/:id', component: EditCardComponent, canActivate: [AuthGuard]},
  // { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
