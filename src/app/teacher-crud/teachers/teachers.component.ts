import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teacher';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: Teacher[] = [];

  constructor(private teacherService: TeacherService, private router: Router) { }

  ngOnInit(): void {
    this.getData()

  }
  getData() {
    this.teacherService.search().subscribe((entites: Teacher[]) => {
      this.teachers = entites;
    })
  }


  select(id: string) {
    this.router.navigate(['teachers', id]);
  }
  add() {
    this.router.navigate(['teachers', 'new'])
  }
  delete(id: String) {
    this.teacherService.delete(id).subscribe((message => {
      this.getData();
    }))
  }
  student() {
    this.router.navigate(['teachers'])
  }
}