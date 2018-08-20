import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationPage} from './registration/registration.page';
import {
  MatButtonModule, MatCell, MatCellDef,
  MatCheckboxModule,
  MatFormFieldModule,
  MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef,
  MatInputModule, MatRow, MatRowDef, MatSelectModule, MatTabHeader,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {AppService} from './app.service';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmationPage} from './confirmation/confirmation.page';
import {AdminPage} from './admin/admin.page';
import {CdkTableModule} from '@angular/cdk/table';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/registration',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    component: RegistrationPage
  },
  {
    path: 'confirmation',
    component: ConfirmationPage
  },
  {
    path: 'admin',
    component: AdminPage
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPage,
    ConfirmationPage,
    AdminPage,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatTableModule,
    CdkTableModule,
    CommonModule,
    MatToolbarModule,
    MatSelectModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
