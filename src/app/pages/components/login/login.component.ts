import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AouthService } from '../../../../core/services/aouth.service';
import { PopupComponent } from '../shared/popup/popup.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, PopupComponent, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';
  isLogedIn = false;
  isOpen = false;

  constructor(private fb: FormBuilder, private authService: AouthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });
  }

  open() { this.isOpen = true; }
  close() { this.isOpen = false; }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;

    this.authService.signin({ email, password }).subscribe({
      next: (res: any) => {
        console.log('Login Success:', res);
        // console.log('jjjjjjjjjjjjjjjjjjjjj');
        localStorage.setItem('token', res.token);
        this.isLogedIn = true;
        this.errorMessage = '';
        this.close();
      },
      error: (err: any) => {
        console.error('Login Failed:', err);
        this.errorMessage = err.error?.message || 'Login failed';
      }
    });
  }

  get emailCtrl() { return this.loginForm.get('email'); }
  get passwordCtrl() { return this.loginForm.get('password'); }
    step: 'login' | 'signup' | 'forgot' | 'verify' | 'reset' = 'login';

  goTo(step: 'login' | 'signup' | 'forgot' | 'verify' | 'reset') {
    this.step = step;
  }

}
