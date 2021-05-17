import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from '../user'
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User({});
  loginForm: FormGroup

  constructor(private http: HttpClient, private fb: FormBuilder,
    private auth: AuthserviceService,
    private router: Router) {
    this.loginForm = this.fb.group({   
      email: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  submit() {
    this.user = {
      id: this.loginForm.get('id')?.value,
      email: this.loginForm.get('email')?.value,
      name: this.loginForm.get('name')?.value,
      password: this.loginForm.get('password')?.value
    }

    this.auth.register(this.user).subscribe(res => {
      if (res) {
        console.log(res)
        this.router.navigate(['login'])
      } else {
        console.log("Error")
      }
    }, err => {
      console.error(err)
    })

  }




}
