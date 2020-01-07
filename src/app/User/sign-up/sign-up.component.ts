import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {CatalogoSexo} from '../../Acccess.Data/Model/UCatalogoSexo';
import { ServiceUser } from '../../Acccess.Data/Controller/ServicesUser/ServiceUserRegister';
import { UserRegister } from '../../Acccess.Data/Model/UserRegister';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { HttpResponse } from '@angular/common/http';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppDateAdapter, APP_DATE_FORMATS} from '../../UtilFunction/date.adapter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  providers: [
    {
        provide: DateAdapter, useClass: AppDateAdapter
    },
    {
        provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
    ]
})
export class SignUpComponent implements OnInit {
  hide = true;
  isActive = true;
  ur = new UserRegister();
  fullName: string;
  lstCatalogoSexo$: Observable<CatalogoSexo[]>;
  generoSelected: CatalogoSexo;
  IsInsert$: Observable<HttpResponse<boolean>>;
  birthday: Date;

  constructor(private userServices: ServiceUser, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    // tslint:disable-next-line:no-debugger
    this.obtenerCatalogoSexos();
      }

      obtenerCatalogoSexos(): void {
        this.lstCatalogoSexo$ = this.userServices.obtenerCatalogoSexos();
      }

      registerUser() {
        // tslint:disable-next-line:no-debugger
       debugger;
       let u = new UserRegister();
       u = this.ur;
       u.FechaCumpleanios = this.birthday;
       u.Id = 0;
       u.IdCatalogoSexo = this.generoSelected.id;
       u.IdCatalogoStatus = 1;
       this.userServices.registrarUsuario(u);


  }
  regresarLogin() {
this.router.navigate(['/login']);
  }
  changeTest(evt) {

    // tslint:disable-next-line:no-debugger
    debugger;
    console.log(this.generoSelected);
  }
}
