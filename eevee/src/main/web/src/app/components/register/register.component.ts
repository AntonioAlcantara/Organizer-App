import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(
     private router: Router,
     private registerService: UserService
      ) {
         this.registerForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            surname: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
            validatePassword: new FormControl('', [Validators.required]),
            nickname: new FormControl('', [Validators.required])
         });

  }

  ngOnInit(): void {
  }
  register() {
     if (this.registerForm.valid) {
        const user = new UserModel();
        user.email = this.registerForm.controls.email.value;
        user.name = this.registerForm.controls.name.value;
        user.surname = this.registerForm.controls.surname.value;
        user.password = this.registerForm.controls.password.value;
        user.nickname = this.registerForm.controls.nickname.value;

        this.registerService.register(user).subscribe(response => {
            console.log(response);
            if (response.status === 201) {
               this.router.navigate(['login']);
            } else {
               console.log(response.status);
            }
         }, error => console.log(error.status));
     }
  }

}
 