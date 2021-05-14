import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { User } from '../user'
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User({});
  loginForm: FormGroup
  constructor(private http: HttpClient, private fb: FormBuilder,
    private auth: AuthserviceService,
    // private loginService: LoginService,
    private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  login() {
    this.user.email = this.loginForm.get('email')?.value
    this.user.password = this.loginForm.get('password')?.value

    this.auth.login(this.user).subscribe(res => {
      if (res) {
        console.log(res)
        this.router.navigate(['students'])
        this.auth.setLoggedIn(true)
      } else {
        console.log("Error")
      }
    }, err => {
      console.log("Error")
    })
  }


}
