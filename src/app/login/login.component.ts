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
    //if (usNm === 'android' && pass === 'android') {
      this.router.navigate(['dash', usNm]);
    //}
  }
}
