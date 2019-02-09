import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/Auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // get token from localStorage
    // set decoded token to the authService decoded token
    // of the localStorage. This persists the loggedIn
    // username if the browser is refreshed.
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.decodedToken = this.authService.jwtHelper.decodeToken(token);
    }
  }
}
