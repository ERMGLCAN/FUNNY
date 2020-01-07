import { Component, OnInit, OnDestroy, Inject, HostListener} from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router} from '@angular/router';
import { ServiceUser } from '../../Acccess.Data/Controller/ServicesUser/ServiceUserRegister';
import { UserOAuthRegister } from '../../Acccess.Data/Model/UserOAuthRegister';
import { Login } from '../../Acccess.Data/Model/ULogin';
import { MatSnackBar } from '@angular/material';
import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';
import { BusyService } from '../../MessageServices/busy.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Output, Input, EventEmitter } from '@angular/core';
export enum KEY_CODE {
  ENTER =  13
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  @Output() public output = new EventEmitter();
  user: SocialUser;
  loggedIn: boolean;
  hide = true;
  isActive = true;
  IsAuthenticate = false;
  login = new  Login();
  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private authService: AuthService, private userService: ServiceUser, private snackBar: MatSnackBar, private busyService: BusyService) {}

@HostListener('window:keyup', ['$event'])
keyEvent(event: KeyboardEvent) {
  // tslint:disable-next-line:no-debugger
   debugger;
  // tslint:disable-next-line: deprecation
   if (event.keyCode === KEY_CODE.ENTER) {
      this.IniciarSesion();
   }
}

  ngOnInit() {
    this.output.emit(true);
  }


  signOut(): void {
    this.authService.signOut();
  }
  public ngOnDestroy() {
  }

  signOAuth(socialProvider: string): void {
    let socialPlatformProvider: string;
    if (socialProvider === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.authService.signIn(socialPlatformProvider).then((socialusers: SocialUser)  => {
      this.Savesresponse(socialusers);
    });
  }


  Savesresponse(socialusers: SocialUser) {
      localStorage.setItem('socialusers', JSON.stringify(socialusers));
      console.log(localStorage.setItem('socialusers', JSON.stringify(socialusers)));
      const u = new UserOAuthRegister();
      u.Id = 0;
      u.IdCatStatus = 1;
      u.IdOauth = socialusers.id;
      u.Email = socialusers.email;
      u.FirstName = socialusers.firstName;
      u.LastName = socialusers.lastName;
      u.Name = socialusers.name;
      u.PhotoUrl = socialusers.photoUrl;
      u.Provider = socialusers.provider;
      u.UcatalogoStatus = new Object();
      this.userService.registrarAOauth(u);
    }

    registrarManual() {
    this.router.navigate(['/register']);

    }

    IniciarSesion() {
    if (typeof this.login.email === 'undefined' || this.login.email === '') {
      this.snackBar.open('Por favor ingresa email', 'Error: email', {
        duration: 5000,
      });
    } else if (typeof this.login.password === 'undefined' || this.login.password === '') {
      this.snackBar.open('Por favor ingresa contraseña', 'Error: contraseña', {
        duration: 5000,
      });
    } else {
      this.userService.LogInUser(this.login);


 }

}



}
