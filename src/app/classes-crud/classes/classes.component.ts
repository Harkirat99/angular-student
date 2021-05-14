import { Component, OnInit } from '@angular/core';
import { ClassService } from '../class.service';
import { Class } from '../class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  classes: Class[] = [];
  constructor(private classService: ClassService, private router: Router) { }

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.classService.search().subscribe((entites: Class[]) => {
      this.classes = entites;
    })
  }


  select(id:string){
    this.router.navigate(['classes',id]);
    }
    add(){
      this.router.navigate(['classes','new'])
    }
    delete(id:String){
      this.classService.delete(id).subscribe((message =>{
        this.getData();
      }))
    }
    student(){
      this.router.navigate(['students'])
    }
    redirect(){
      this.router.navigate(['login'])
    }
    


}
