import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PasswordComponent } from '../password/password.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private dialog: MatDialog
  ){}

  // Open update password dialog box
  updatePassword() {
    const dialogRef = this.dialog.open(PasswordComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
