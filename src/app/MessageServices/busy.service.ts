import { Injectable } from '@angular/core';
import {NgxSpinnerModule, NgxSpinnerService} from 'ngx-spinner';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class BusyService {

  constructor(private spinnerServices: NgxSpinnerService, private snackBar: MatSnackBar) { }

sipinner(isActiv: boolean): void {
  if (isActiv) {
    this.spinnerServices.show();
  } else {
      this.spinnerServices.hide();
  }
}

sipinnerTime(): void {
this.spinnerServices.show();
setTimeout(() => {
  this.spinnerServices.hide();
}, 3000);
}

messageBoxError(message: string, infoType: string): void {
  this.snackBar.open(message, 'Error: ' + infoType, {
    duration: 3000,
  });
}

messageBoxWarning(message: string, infoType: string): void {
  this.snackBar.open(message, 'Warning: ' + infoType, {
    duration: 3000,
  });
}

messageBox(message: string): void {
  this.snackBar.open(message, '', {
    duration: 3000,
  });
}

}
