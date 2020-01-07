import { Component, Output, Input } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
@Input() public IsAuthenticate: boolean;


constructor() {
this.IsAuthenticate = true;
}





}
