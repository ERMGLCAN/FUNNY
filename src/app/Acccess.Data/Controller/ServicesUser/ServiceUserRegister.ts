import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserRegister } from '../../Model/UserRegister';
import { CollectionService } from 'src/app/UtilHttp/CollectionService';
import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { catchError, map, tap } from 'rxjs/operators';
import { CatalogoSexo } from '../../Model/UCatalogoSexo';
import { MessageService } from '../../../MessageServices/MessageService';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserOAuthRegister } from '../../Model/UserOAuthRegister';
import { Login } from '../../Model/ULogin';
import { BusyService } from 'src/app/MessageServices/busy.service';
import { AppComponent } from 'src/app/app.component';
import { Component, Output, Input, EventEmitter } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })

  export class ServiceUser extends CollectionService {
    catalogoSex: CatalogoSexo[];
    @Output() public output = new EventEmitter();
      // tslint:disable-next-line:max-line-length
      constructor(private http: HttpClient, private messageService: MessageService, private snackBar: MatSnackBar, private router: Router, private busyService: BusyService) {
        super();
        this.url = 'https://localhost:44330/api/User/ObtenerCatalogoSexo';
      }

      registrarUsuario(user: UserRegister) {
        this.http.post('https://localhost:44330/api/User/registrarUsuario', user)
        .subscribe(response => {
          this.busyService.messageBox('Registrado correctamente');
          this.router.navigate(['/initialmap']);
        });
   }

      registrarAOauth(user: UserOAuthRegister) {
        this.http.post('https://localhost:44330/api/User/restrarUsuarioAuth', user)
        .subscribe(response => {
          this.busyService.messageBox('Registrado correctamente');
          this.router.navigate(['/initialmap']);
        });
      }

obtenerCatalogoSexos(): Observable<CatalogoSexo[]> {
  return this.http.get<CatalogoSexo[]>(this.url, this.httpOptions)
  .pipe(
    map((item: CatalogoSexo[]) => item),
    catchError(this.handleError)
  );
}

LogInUser(log: Login): void {
  this.http.post('https://localhost:44330/api/User/loginUser', log).subscribe((response: boolean) => {
    if (response) {
      this.busyService.sipinner(false);
      this.output.emit(false);
      this.router.navigate(['/initialmap']);

    } else {
      this.busyService.sipinner(false);
      this.output.emit(true);
      this.busyService.messageBoxError('Las credenciales ingresadas son incorrectas', 'Credenciales incorrectas');
    }
  });

}



 /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
 private handleError<T>(operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {

     // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead
     this.snackBar.open(error, 'error', {
      duration: 2000,
    });

     // TODO: better job of transforming error for user consumption
     this.log(`${operation} failed: ${error.message}`);

     // Let the app keep running by returning an empty result.
     return of(result as T);
   };
 }

 
/** Log a HeroService message with the MessageService */
private log(message: string) {
  this.messageService.add('HeroService: ' + message);
}

  }
