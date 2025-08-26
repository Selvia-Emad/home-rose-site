import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopupComponent } from '../shared/popup/popup.component';
import { AouthService } from '../../../../core/services/aouth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PopupComponent],
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  isOpen = false;
  accountForm!: FormGroup;
    errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AouthService) {
    this.accountForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['MyApp_2025*Strong'],
      // password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ["MyApp_2025*Strong"],
      // rePassword: ['', Validators.required],
      gender: ['male']
    }, { validators: this.passwordMatchValidator });
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
    this.accountForm.reset({ gender: 'male' }); // reset with default gender
  }

  passwordMatchValidator(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirm = group.get('rePassword')?.value;
    return pass === confirm ? null : { notMatching: true };
  }

  submit() {
    if (this.accountForm.invalid) {
      this.accountForm.markAllAsTouched();
      return;
    }

    const finalData = {
      ...this.accountForm.value,
      rePassword: this.accountForm.value.rePassword
    };

    this.authService.signup(finalData).subscribe({
      next: (res: any) => {
        console.log('Signup success:', res);
        console.log('jjjjjjjj');
        this.close();
      },
      error: (err) => {
          console.error('Signup failed:', err);
          if (err.status === 409) {
            this.errorMessage = 'User is allready excist.';
          } else if (err.error?.error) {
            this.errorMessage = err.error.error;
          } else {
            this.errorMessage = 'wrong, pleas try again ';
          }
        }
      });
  }
}
