import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { ChangePasswordComponent } from './User/change-password/change-password.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CheckRestrictionComponent } from './User/check-restriction/check-restriction.component';
import { MenuComponent } from './Nav/menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { NavigationBarComponent } from './Nav/navigation-bar/navigation-bar.component';
import { LoginComponent } from './User/login/login.component';
import { MapsComponent } from './Initial/maps/maps.component';
import { NotfoundComponent } from './Default/notfound/notfound.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule, MatSliderModule, DateAdapter} from '@angular/material';
import { HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {NgxSpinnerModule} from 'ngx-spinner';



const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2428389270806744')
  },
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('313254857259-b0vfhpde4nmk0n8op9g0hiv7honcvddv.apps.googleusercontent.com')
  },

]);



export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    SignUpComponent,
    ChangePasswordComponent,
    CheckRestrictionComponent,
    MenuComponent,
    NavigationBarComponent,
    LoginComponent,
    MapsComponent,
    NotfoundComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    SocialLoginModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    MatDatepickerModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSliderModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    NgxSpinnerModule
  ],
  providers: [
    {provide: AuthServiceConfig, useFactory: provideConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
