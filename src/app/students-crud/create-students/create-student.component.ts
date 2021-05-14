import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Router } from '@angular/router';
import { Student } from '../student';
import { Class } from 'src/app/classes-crud/class';
import { ClassService } from 'src/app/classes-crud/class.service';

@Component({
  selector: 'app-create',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student: Student = new Student({});
  classes: Class[] = []
  id: string = ''

  constructor(private studentsService: StudentsService,
    private classService: ClassService,
    private router: Router) { }

  ngOnInit(): void {
    this.getClasses()
  }

  createStudent() {
    if (!this.student.name) {
      return
    }
    if (!this.student.age) {
      return
    }
    if (!this.student.class.id) {
      return
    }
    this.studentsService.post(this.student).subscribe(item => {
      this.router.navigate(['students', item.id])
    })
  }
  back() {
    this.router.navigate(['students'])
  }
  getClasses() {
    this.classService.search().subscribe((entities: Class[]) => {
      this.classes = entities

    });
  }

}
