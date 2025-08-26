// auth-popup.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../../pages/components/shared/popup/popup.component';
import { AouthService } from '../../../core/services/aouth.service';

@Component({
  selector: 'app-auth-popup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PopupComponent ,],
  templateUrl: './auth-popup.component.html',
  styleUrls: ['./auth-popup.component.scss']
})
export class AuthPopupComponent {
  isOpen = false;
  step: 'login' | 'signup' | 'forgot' | 'verify' | 'reset' = 'login';

  loginForm: FormGroup;
  signupForm: FormGroup;
  verifyForm: FormGroup;
  resetForm: FormGroup;

  errorMessage = '';
  message = '';

  constructor(private fb: FormBuilder, private authService: AouthService) {
    // Login Form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false]
    });

    // Signup Form
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ['', Validators.required],
      gender: ['male']
    }, { validators: this.passwordMatchValidator });

    // Verify Code
    this.verifyForm = this.fb.group({
      resetCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });

    // Reset Password
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)
        ]
      ]
    });
  }

  open(step: 'login' | 'signup' | 'forgot' | 'verify' | 'reset' = 'login') {
    this.step = step;
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.errorMessage = '';
    this.message = '';
  }

  goTo(step: 'login' | 'signup' | 'forgot' | 'verify' | 'reset') {
    this.step = step;
    this.errorMessage = '';
    this.message = '';
  }

  // Validators
  passwordMatchValidator(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirm = group.get('rePassword')?.value;
    return pass === confirm ? null : { notMatching: true };
  }

  // Actions
  onLogin() {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    this.authService.signin({ email, password }).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.token);
        this.message = 'Login successful!';
        this.close();
      },
      error: (err) => this.errorMessage = err.error?.message || 'Login failed'
    });
  }

  onSignup() {
    if (this.signupForm.invalid) return;
    this.authService.signup(this.signupForm.value).subscribe({
      next: () => {
        this.message = 'Account created successfully!';
        this.goTo('login');
      },
      error: (err) => this.errorMessage = err.error?.message || 'Signup failed'
    });
  }

  onVerify() {
    if (this.verifyForm.invalid) return;
    this.authService.verifyResetCode(this.verifyForm.value).subscribe({
      next: () => {
        this.message = 'Code verified successfully!';
        this.goTo('reset');
      },
      error: (err) => this.errorMessage = err.error?.message || 'Invalid code'
    });
  }

  onReset() {
    if (this.resetForm.invalid) return;
    this.authService.resetPassword(this.resetForm.value).subscribe({
      next: () => {
        this.message = 'Password reset successfully!';
        this.goTo('login');
      },
      error: (err) => this.errorMessage = err.error?.message || 'Reset failed'
    });
  }
}
