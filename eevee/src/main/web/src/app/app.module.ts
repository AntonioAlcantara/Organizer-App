import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, ROUTES } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
// MATERIAL COMPONENTS
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
// import { MatDialogContent, MatDialogModule} from '@angular/material/dialog';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './components/menu/menu.component';
import { AddFlatComponent } from './components/add-flat/add-flat.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SnackBarComponent,
    MenuComponent,
    AddFlatComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    MatMenuModule,
    MatDatepickerModule,
    MatSnackBarModule,
    // MatDialogContent,
    // MatDialogModule

  ],
  entryComponents: [
    // DIALOG components
  ],
  providers: [
    HttpClientModule,
    TitleCasePipe,
    DatePipe,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
