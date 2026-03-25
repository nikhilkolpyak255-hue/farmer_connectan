import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otpverify',
  standalone: false,
  templateUrl: './otpverify.html',
  styleUrl: './otpverify.scss',
})
export class Otpverify {


  otp: string = '';
  otpError: string = '';

  private webclient = inject(WebClientService)
  private route = inject(Router)
  verifyOtp(form: NgForm) {

    this.otpError = '';

    if (form.valid) {

      let sotp = sessionStorage.getItem('otp')
      // Example hardcoded OTP check
      if (this.otp === sotp) {
        console.log(sotp,this.otp)
        this.route.navigate(['/changepassword']);
        form.resetForm();
      } else {
        this.otpError = "OTP not matched";
      }

    } else {
      form.control.markAllAsTouched();
    }
  }
  

  goBack() {
    this.route.navigate(['/verify-email']);
  }

}
