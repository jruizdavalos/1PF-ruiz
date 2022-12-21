import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
  nameCourse = new FormControl('')


  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    direction: this.directionControl,
    directionId: this.directionIdControl
  })

}
