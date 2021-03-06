import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/home/menu/menu.component';
import { AddFlatComponent } from './components/add-flat/add-flat.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { AddUsersComponent } from './components/home/flat-list/add-users/add-users.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ModalInfoDialogComponent } from './components/modal-info-dialog/modal-info-dialog.component';
import { FooterComponent } from './components/footer/footer.component';
import { FAQComponent } from './components/faq/faq.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
// BOOTSTRAP COMPONENTS
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// MATERIAL COMPONENTS
import { MatSliderModule} from '@angular/material/slider';
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatChipsModule} from '@angular/material/chips';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule} from '@angular/material/table';
import { MatListModule} from '@angular/material/list';
import { MatTooltipModule} from '@angular/material/tooltip';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { MatMenuModule} from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule} from '@angular/material/select';
import { EventsTableComponent } from './components/home/events/events-table/events-table.component';
import { EventsListComponent } from './components/home/events/events-list/events-list.component';
import { EventsComponent } from './components/home/events/events.component';
import { MatBadgeModule} from '@angular/material/badge';
import { LandingComponent } from './components/home/landing/landing.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SnackBarComponent,
    MenuComponent,
    AddFlatComponent,
    CreateEventComponent,
    AddUsersComponent,
    LoadingComponent,
    ModalInfoDialogComponent,
    FooterComponent,
    EventsTableComponent,
    EventsListComponent,
    EventsComponent,
    FAQComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatAutocompleteModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatListModule,
    RouterModule,
    MatTooltipModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    HttpClientModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatChipsModule,
    MatSliderModule

  ],
  entryComponents: [
    // DIALOG components
  ],
  providers: [
    HttpClientModule,
    TitleCasePipe,
    DatePipe,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
