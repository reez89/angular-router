import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {} // per utilizzare this.router e i suoi metodi, devo importare router: Router.

  ngOnInit() {
  }

  onLoadServers(){
    // codice
    this.router.navigate(['/servers']);
  }

}
