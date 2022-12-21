import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from '../../../models/students.model';



@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styles: [
  ]
})
export class StudentDialogComponent {

  firstNameControl = new FormControl('')
  lastNameControl = new FormControl('')
  directionControl = new FormControl('')
  directionIdControl = new FormControl('')
  nameCourseControl = new FormControl('')


  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    direction: this.directionControl,
    directionId: this.directionIdControl,
    nameCourse: this.nameCourseControl
  })
  constructor(private readonly dialogRef: DialogRef, @Inject(MAT_DIALOG_DATA) public data: Student | null,) {
    if (data) {
      this.studentForm.patchValue(data)
    }
  }
  close() {
    this.dialogRef.close()
  }

}
