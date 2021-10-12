import { Component } from '@angular/core';
import { DialogocomponentComponent } from './dialogocomponent/dialogocomponent.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-material';
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(DialogocomponentComponent);
  }
  hide = true;
}



  
