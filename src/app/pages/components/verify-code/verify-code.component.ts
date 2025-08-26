import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AouthService } from '../../../../core/services/aouth.service';
import { CommonModule } from '@angular/common';
import { PopupComponent } from '../shared/popup/popup.component';

@Component({
  selector: 'app-verify-code',
    imports:[CommonModule,ReactiveFormsModule,PopupComponent],

  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss']
})
export class VerifyCodeComponent implements OnInit {
  verifyForm!: FormGroup;
  message: string = '';
    isOpen = false;

  errorMessage: string = '';
open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.verifyForm.reset();
  }
  constructor(private fb: FormBuilder, private authService: AouthService) {}

  ngOnInit(): void {
    this.verifyForm = this.fb.group({
      resetCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
    });
  }

  get resetCodeCtrl() {
    return this.verifyForm.get('resetCode');
  }

  onVerify(): void {
    if (this.verifyForm.invalid) return;

    const resetCode = this.verifyForm.value.resetCode ?? '';

    this.authService.verifyResetCode({ resetCode }).subscribe({
      next: (res: any) => {
        this.message = ' Code verified successfully!';
        this.errorMessage = '';
      },
      error: (err: any) => {
        this.errorMessage = err.error?.message || ' Invalid or expired code';
        this.message = '';
      },
    });
  }
}
