import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-ang';

  constructor(public auth: AuthserviceService,
    public router: Router) {
  }

  logout() {
    this.auth.isLoggedIn = false
    this.router.navigate(["login"])
  }

}
