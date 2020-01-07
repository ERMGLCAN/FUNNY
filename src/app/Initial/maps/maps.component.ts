import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router} from '@angular/router';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  user = new  SocialUser();
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  // tslint:disable-next-line:no-debugger
   debugger;
   this.user = JSON.parse( localStorage.getItem('socialusers'));
   console.log(this.user);
  }

}
