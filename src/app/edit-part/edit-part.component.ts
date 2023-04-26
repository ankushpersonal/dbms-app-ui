import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ShopServicesService } from '../shop-services.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-part',
  templateUrl: './edit-part.component.html',
  styleUrls: ['./edit-part.component.css']
})
export class EditPartComponent implements OnInit{
  partForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditPartComponent>,
    private shopService: ShopServicesService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.partForm = this.fb.group({
      price: ['', Validators.required]
    });
  }

  onCancel() {
    this.dialogRef.close();
  }


  updatePrice() {
    let newPrice = this.partForm.controls['price'].value;
    this.shopService.updatePartPrice(this.data.part, newPrice)
    .subscribe(response => {
      console.log(response);
      this.dialogRef.close();
    })
  }

  ngOnInit(): void {

  }

}
