import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CustomerServicesService } from '../customer-services.service';

@Component({
  selector: 'app-delete-dialog-box',
  templateUrl: './delete-dialog-box.component.html',
  styleUrls: ['./delete-dialog-box.component.css']
})
export class DeleteDialogBoxComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogBoxComponent>,
    private customerService: CustomerServicesService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  onDelete() {
    this.customerService.deleteRecord(this.data.entity, this.data.id)
    .subscribe(res => {
      console.log(res);
      this.dialogRef.close();
    });
  }
  onCancel() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
      console.log(this.data, "sdfdsfsdf");
  }

}
