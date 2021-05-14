import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { Class } from 'src/app/classes-crud/class';
import { ClassService } from 'src/app/classes-crud/class.service';

//import { ClassService } from '../class.service';
//import { Class } from '../class';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student = new Student({});
  id: string = ''
  classes: Class[] = []

  constructor(private studentsService: StudentsService,
    private classService: ClassService,
    private route: ActivatedRoute,
    private router: Router) {
    route.params.subscribe(params => {
      this.id = params.id
    })
  }

  ngOnInit(): void {
    this.getClasses()
  }

  getItem() {
    this.studentsService.get(this.id).subscribe((entity: Student) => {
      this.student = new Student(entity)
    });
  }

  getClasses() {
    this.classService.search().subscribe((entities: Class[]) => {
      this.classes = []
      for (const entity of entities) {
        this.classes.push(new Class(entity))
      }
      this.getItem();
    });
  }

  back() {
    this.router.navigate(['/students'])
  }

  save() {
    this.studentsService.put(this.id, this.student).subscribe((item => {
      this.router.navigate([`students`])
    }))
  }


}
