import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { FlatListComponent } from './components/home/flat-list/flat-list.component';
import { ModalInfoDialogComponent } from './components/modal-info-dialog/modal-info-dialog.component';
import { AuthGuard } from './components/login/guards/auth.guard';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventsComponent } from './components/home/events/events.component';
import { FAQComponent } from './components/faq/faq.component';



const ROUTES: Routes = [
  // routes
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
  children: [
    { path: 'flats', component: FlatListComponent, canActivate: [AuthGuard]},
    { path: 'createEvent', component: CreateEventComponent, canActivate: [AuthGuard]},
    { path: 'events', component: EventsComponent, canActivate: [AuthGuard]}
  ]},
  { path: 'about', component: ModalInfoDialogComponent},
  { path: 'faq', component: FAQComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home', canActivate: [AuthGuard]}
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
  ModalInfoDialogComponent,
  CreateEventComponent,
  EventsComponent
];
