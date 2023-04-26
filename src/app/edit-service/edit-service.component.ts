import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ShopServicesService } from '../shop-services.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent {
  serviceForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditServiceComponent>,
    private shopService: ShopServicesService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.serviceForm = this.fb.group({
      price: ['', Validators.required]
    });
  }

  onCancel() {
    this.dialogRef.close();
  }

  updatePrice() {
    let newPrice = this.serviceForm.controls['price'].value;
    this.shopService.updateServicePrice(this.data.service, newPrice)
    .subscribe(response => {
      console.log(response);
      this.dialogRef.close();
    })
  }

}
