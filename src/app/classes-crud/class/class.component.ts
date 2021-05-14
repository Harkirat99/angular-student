import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';
import { Class } from '../class';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  class: Class = new Class({});
  id: string = ''
  constructor(private classesService: ClassService,
    private route: ActivatedRoute,
    private router: Router) { 

      route.params.subscribe(params => {
        this.id = params.id
      })
    }

  ngOnInit(): void {
    this.getItem();

  }

  getItem() {
    this.classesService.get(this.id).subscribe((entity: Class) => {
      this.class = entity
    });
}



back(){  
  this.router.navigate(['/classes'])
}

save(){
  this.classesService.put(this.id,this.class).subscribe((item=>{
    this.router.navigate([`classes`])
  }))
}


}
