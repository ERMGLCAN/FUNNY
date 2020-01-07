import { Component, OnInit, Output,EventEmitter  } from '@angular/core';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }


  logout() {

  }
  public onDragStart(event , identifier) {

  }
  public isAuthenticated() {

  }


}
