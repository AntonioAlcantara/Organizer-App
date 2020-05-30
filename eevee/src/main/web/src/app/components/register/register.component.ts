import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

   registerForm: FormGroup;
   regEx = '\\S+[@]+\\S+[.]+\\S+';
   cities: string[];
   constructor(
      private router: Router,
      private userService: UserService,
      private notificationsService: NotificationsService
   ) {
      this.cities = this.getCities();
      this.registerForm = new FormGroup({
         name: new FormControl('', [Validators.required]),
         surname: new FormControl('', [Validators.required]),
         email: new FormControl('', [Validators.required, Validators.pattern(this.regEx)]),
         password: new FormControl('', [Validators.required]),
         nickname: new FormControl('', [Validators.required]),
         city: new FormControl('', [Validators.required])
      });

   }

   register() {
      if (this.registerForm.valid) {
         const user = new UserModel();
         user.email = this.registerForm.controls.email.value;
         user.name = this.registerForm.controls.name.value;
         user.surname = this.registerForm.controls.surname.value;
         user.password = this.registerForm.controls.password.value;
         user.nickname = this.registerForm.controls.nickname.value;
         user.city = this.registerForm.controls.city.value;

         this.userService.register(user).subscribe(response => {
            if (response.status === 201) {
               this.router.navigate(['home']);
            } else {
               this.notificationsService.getErrorNotification(response.status);
            }
         }, error => this.notificationsService.getErrorNotification(error.status));
      }

   }
   checkNickname() {
      this.userService.checkNicknameExists(this.registerForm.controls.nickname.value).subscribe(response => {
         if (response.status === 200) {
            this.registerForm.controls.nickname.setErrors({ invalid: false });
         } else {
            this.registerForm.controls.nickname.setErrors({ invalid: true });
            this.notificationsService.getErrorNotification();
         }
      });
   }
   getCities(): string[] {
      const cities = ['Álava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Ávila', 'Badajoz', 'Barcelona', 'Burgos', 'Cáceres',
         'Cádiz', 'Cantabria', 'Castellón', 'Ciudad Real', 'Córdoba', 'La Coruña', 'Cuenca', 'Gerona', 'Granada', 'Guadalajara',
         'Guipúzcoa', 'Huelva', 'Huesca', 'Islas Baleares', 'Jaén', 'León', 'Lérida', 'Lugo', 'Madrid', 'Málaga', 'Murcia', 'Navarra',
         'Orense', 'Palencia', 'Las Palmas', 'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia', 'Sevilla', 'Soria', 'Tarragona',
         'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'];
      return cities;
   }
}
