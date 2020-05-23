import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private userService: UserService,
    private notificationsService: NotificationsService,
    private router: Router) {
      this.loginForm = new FormGroup({
          nickname: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required])
      });

  }

  ngOnInit(): void {
  }
  login() {
    const user = new UserModel();
    user.nickname = this.loginForm.controls.nickname.value;
    user.password = this.loginForm.controls.password.value;
    this.userService.login(user).subscribe(response => {

        localStorage.setItem('token', response);
        localStorage.setItem('userId', response);
        this.router.navigate(['home']);
    }, error => this.notificationsService.getErrorNotification(error.status));
  }

}
