import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private router: Router) {
      this.loginForm = new FormGroup({
          email: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required])
      });

  }

  ngOnInit(): void {
  }
  login() {
      this.router.navigate(['register']);
  }

}
