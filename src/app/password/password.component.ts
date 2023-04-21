import { Component, Inject, ViewEncapsulation} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PasswordComponent {
  updatePasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<PasswordComponent>) {
    this.updatePasswordForm = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  getNewPasswordErrorMessage() {
    // if (this.updatePasswordForm.controls.newPassword.hasError('required')) {
    //   return 'New Password is required.';
    // }
    // if (this.updatePasswordForm.controls.newPassword.hasError('minlength')) {
    //   return 'New Password must be at least 8 characters long.';
    // }
    // return '';
  }

  // cancel operation
  onCancel(): void {
    this.dialogRef.close();
  }

  // Change password upon click of submit
  onSave(): void {
    if (this.updatePasswordForm.valid) {
      const oldPassword = this.updatePasswordForm.value.oldPassword;
      const newPassword = this.updatePasswordForm.value.newPassword;
      // TODO: send API request to update password
      this.dialogRef.close();
    }
  }
}
