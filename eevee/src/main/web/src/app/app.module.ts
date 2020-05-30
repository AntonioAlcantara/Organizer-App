import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
// BOOTSTRAP COMPONENTS
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// MATERIAL COMPONENTS
import { MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { TitleCasePipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { MatTableModule} from '@angular/material/table';
import { MatListModule} from '@angular/material/list';
import { MatTooltipModule} from '@angular/material/tooltip';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './components/home/menu/menu.component';
import { AddFlatComponent } from './components/add-flat/add-flat.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { AddUsersComponent } from './components/home/flat-list/add-users/add-users.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule} from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SnackBarComponent,
    MenuComponent,
    AddFlatComponent,
    CreateEventComponent,
    AddUsersComponent,
    LoadingComponent
  ],
  imports: [
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
    MatSnackBarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatSelectModule

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
