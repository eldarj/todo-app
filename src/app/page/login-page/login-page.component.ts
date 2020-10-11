import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {delay} from 'rxjs/operators';
import {Router} from '@angular/router';
import {IAuthService} from '../../shared/auth/auth.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  isFormLoading = false;
  loginForm: FormGroup;

  isSuccess = false;
  isError = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: IAuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['eldar.jah@gmail.com', [Validators.required, Validators.email]],
      password: ['password', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.isFormLoading = true;
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
        .pipe(delay(2000))
        .subscribe(
          this.onLoginSuccess,
          this.onLoginError
        );
    }
  }

  onLoginSuccess = (data) => {
    // display success and await for a second before redirect
    this.isSuccess = true;
    setTimeout(() => {
      this.router.navigate(['/todos']);
    }, 1000);
  }

  onLoginError = (error) => {
    this.isFormLoading = false;
    this.isError = true;
  }
}
