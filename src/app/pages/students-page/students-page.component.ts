import { Component } from '@angular/core';
import { Student } from '../../models/students.model';
import { MatDialog } from '@angular/material/dialog'
import { StudentDialogComponent } from '../../shared/components/student-dialog/student-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {
  students: Student[] = [
    new Student(1, 'Naruto', 'Uzumai', 'autumn', '1234', 'fullstack', true),
    new Student(2, 'Sasuke', 'Uchiha', 'summer', '3435', 'desrrolo web', false),
    new Student(3, 'Sakura', 'Haruno', 'spring', '2525', 'React', false),
    new Student(4, 'Kakashi', 'Hatake', 'winter', '5678', 'Angular', true)
  ]
  displayedColumns = ['id', 'firstName', 'lastName', 'isActive', 'edit', 'delete'];

  constructor(private readonly dialogService: MatDialog) { }

  addStudent() {
    this.dialogService.open(StudentDialogComponent)
  }
}
