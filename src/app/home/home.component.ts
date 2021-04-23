import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // per utilizzare this.router e i suoi metodi, devo importare router: Router.
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
  }

  onLoadServer(id: number) {
    // codice
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowaEdit: '1'}, fragment: 'loading'});
  }

  onLogIn() {
    this.authService.login();
    console.log('ho premuto log in');

  }

  onLogout() {
    this.authService.logout();
  }

}
