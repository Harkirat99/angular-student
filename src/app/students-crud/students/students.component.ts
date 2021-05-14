import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from '../student';
import { Router } from '@angular/router';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentsService, private router: Router) { }

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.studentService.search().subscribe((entites: Student[]) => {
      this.students = entites;
    })
  }
  select(id: string) {
    this.router.navigate(['students', id]);
  }
  add() {
    this.router.navigate(['students','new'])
  }
  delete(id: String) {
    this.studentService.delete(id).subscribe((message => {
      this.getData();
    }))
  }
  class() {
    this.router.navigate(['classes']);
  }

}
