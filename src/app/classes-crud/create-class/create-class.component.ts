import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';
import { Router } from '@angular/router';
import { Class } from '../class';

     
@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {
  class: Class = new Class({});

  constructor(private classesService:ClassService,
    private router: Router) { }

  ngOnInit(): void {
  }
  createClass() {
    this.classesService.post(this.class).subscribe(item => {
      this.router.navigate(['classes', item.id])
    })
  }     

  back(){
    this.router.navigate(['classes'])
  }


}
