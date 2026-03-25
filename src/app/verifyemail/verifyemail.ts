import { Component, inject } from '@angular/core';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Loader } from '../loader/loader';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-verifyemail',
  standalone: false,
  templateUrl: './verifyemail.html',
  styleUrl: './verifyemail.scss',
})
export class Verifyemail {

  email: string = '';
  role: string = '';
  loader:boolean=false
  verifyError: string = ''

  private webclient = inject(WebClientService);
  private route = inject(Router)

  registeredEmails: string[] = [
    'farmer@gmail.com',
    'customer@gmail.com'
  ];
  toastr: any;

  // sendOtp(form: any) {
  //   if (form.valid) {

  //     const emaildata = new FormData();
  //     emaildata.append('email', this.email)
  //     emaildata.append('role', this.role)

  //     if (this.registeredEmails.includes(this.email)) {
  //       this.webclient.postdata('/verify-email', emaildata).subscribe({
  //         next: (data) => {
  //           console.log(data)
  //           this.route.navigate(["/optverify"])
  //         }
  //       })
  //     } else {
  //       this.emailNotFound = true;
  //     }

  //   }
  // }

  // goBack() {
  //   this.email = '';
  //   this.role = '';
  //   this.emailNotFound = false;
  // }


  verify(form: NgForm) {

    // this.verifyError = ''; // reset previous error

    if (form.valid) {

      this.loader=true
      const emaildata = new FormData();
      emaildata.append('email', this.email)
      emaildata.append('role', this.role)

      console.log(emaildata)
      debugger
      
      this.webclient.postdata('/verify-email', emaildata)
        .subscribe({
          next: (data: any) => {

            sessionStorage.setItem('otp',data.opt)
            sessionStorage.setItem('email',this.email)
            sessionStorage.setItem('role',this.role)
           
            this.loader=false
            this.route.navigate(['/optverify'])

          },
          // error: () => {
          //   this.verifyError = "Something went wrong. Please try again.";
          // }

          error(err) {
            alert("email not found..........")
          },
        });

        this.loader=false

    } else {
      // Mark all fields touched to show validation
      form.control.markAllAsTouched();
     
    }


  }
  goBack() {

  }
}

