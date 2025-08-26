import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { ForgetPasswordComponent } from './pages/components/forget-password/forget-password.component';
import { VerifyCodeComponent } from './pages/components/verify-code/verify-code.component';
import { CreateAccountComponent } from './pages/components/create-account/create-acount.component';
const routes: Routes = [
  { path: 'forgot-password', component: ForgetPasswordComponent },
  { path: 'verify-code', component: VerifyCodeComponent },
    { path: 'forgot-password', component: ForgetPasswordComponent },
  { path: 'register', component: CreateAccountComponent },
  { path: '', redirectTo: 'verify-code', pathMatch: 'full' },

];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations()
  ]
};
