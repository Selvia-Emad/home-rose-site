// set-password.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from '../shared/popup/popup.component';
import { CommonModule } from '@angular/common';
import { AouthService } from '../../../../core/services/aouth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, PopupComponent, CommonModule],
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent  implements OnInit {
  resetForm!: FormGroup;
  message: string = '';
  errorMessage: string = '';
  isOpen = false;

  constructor(private fb: FormBuilder, private authService: AouthService) {}

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        ]
      ]
    });
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.resetForm.reset();
  }

  get emailCtrl() {
    return this.resetForm.get('email');
  }

  get newPasswordCtrl() {
    return this.resetForm.get('newPassword');
  }

  onReset(): void {
    if (this.resetForm.invalid) return;

    const { email, newPassword } = this.resetForm.value;

    this.authService.resetPassword({ email, newPassword }).subscribe({
      next: (res: any) => {
        this.message = ' Password reset successfully!';
        this.errorMessage = '';
      },
      error: (err: any) => {
        this.errorMessage = err.error?.message || ' Failed to reset password';
        this.message = '';
      }
    });
  }
}
