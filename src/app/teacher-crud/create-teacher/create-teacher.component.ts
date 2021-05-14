import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Router } from '@angular/router';
import { Teacher } from '../teacher';
import { ClassService } from 'src/app/classes-crud/class.service';
import { Class } from 'src/app/classes-crud/class';


@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {
  teacher: Teacher = new Teacher({});
  classes: Class[] = []
  id: string = ''


  constructor(private teachersService: TeacherService,
    private classService: ClassService,
    private router: Router) { }

  ngOnInit(): void {
    this.getClasses()
  }
  createClass() {

    if (!this.teacher.name) {
      return
    }

    if (!this.teacher.class.id) {
      return
    }
    this.teachersService.post(this.teacher).subscribe(item => {
      this.router.navigate(['teachers', item.id])
    })
  }

  back() {
    this.router.navigate(['teachers'])
  }


  getClasses() {
    this.classService.search().subscribe((entities: Class[]) => {
      this.classes = entities

    });
  }


}
