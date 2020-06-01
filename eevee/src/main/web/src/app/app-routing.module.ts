import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { FlatListComponent } from './components/home/flat-list/flat-list.component';
import { ModalInfoDialogComponent } from './components/modal-info-dialog/modal-info-dialog.component';



const ROUTES: Routes = [
  // routes
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent,
  children: [
    { path: 'flats', component: FlatListComponent},
  ]},
  { path: 'about', component: ModalInfoDialogComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash: true});

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  FlatListComponent,
  ModalInfoDialogComponent
];
