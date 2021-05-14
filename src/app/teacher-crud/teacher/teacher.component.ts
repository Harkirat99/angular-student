import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { Teacher } from '../teacher';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from 'src/app/classes-crud/class.service';
import { Class } from 'src/app/classes-crud/class';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacher: Teacher = new Teacher({});
  id: string = ''
  classes: Class[] = []

  constructor(private teachersService: TeacherService,
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
    this.teachersService.get(this.id).subscribe((entity: Teacher) => {
      this.teacher = new Teacher(entity)
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



back(){  
  this.router.navigate(['/teachers'])
}

save(){
  this.teachersService.put(this.id,this.teacher).subscribe((item=>{
    this.router.navigate([`teachers`])
  }))
}


}
