import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AouthService } from '../../../../core/services/aouth.service';
import { PopupComponent } from '../shared/popup/popup.component';

@Component({
  selector: 'app-forget-password',
  imports:[CommonModule,ReactiveFormsModule,PopupComponent],
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  isOpen = false;
  message = '';
  errorMessage = '';
  forgotForm!: FormGroup;

  constructor(private fb: FormBuilder, private aouthService: AouthService) {}

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get emailCtrl() {
    return this.forgotForm.get('email');
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.forgotForm.reset();
  }

  onRecover() {
    if (this.forgotForm.invalid) {
      this.forgotForm.markAllAsTouched();
      return;
    }

    const email = this.forgotForm.get('email')?.value || '';
    this.aouthService.forgotPassword({ email }).subscribe({
      next: (res) => {
        console.log('Recover password response:', res);
        this.message = 'If this email exists, a reset link has been sent.';
        this.errorMessage = '';
        this.close();
      },
      error: (err) => {
        console.error('Recover password failed:', err);
        this.errorMessage = err.error?.message || 'Something went wrong';
        this.message = '';
      }
    });
  }
}
