import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogin(usNm, pass) {
    // http call

    this.router.navigate(['dash', usNm], {
      queryParams: {
        smApp: 'fb'
      }
    });
  }
}
