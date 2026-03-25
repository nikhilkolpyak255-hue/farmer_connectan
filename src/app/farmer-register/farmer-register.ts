import { Component, inject, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Farmer } from '../entities/Farmer';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-farmer-register',
  standalone: false,
  templateUrl: './farmer-register.html',
  styleUrl: './farmer-register.scss',
})
export class FarmerRegister {

  faremer = new Farmer();
  showPassword = false;
  farmerAdhar: File | null = null;
  farmerAdharback: File | null = null;
  customerAdhar!: File;
  customerAdharback!: File;
  aadharFrontPreview: any = null;
  aadharBackPreview: any = null;
  constructor(private router: Router,) { }
  private webclient = inject(WebClientService);
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  onFileChange(event: any, type: 'aadharFront' | 'aadharBack') {
    const file = event.target.files[0];
    if (!file) return;
    if (type === 'aadharFront') {
      this.farmerAdhar = file;
      this.aadharFrontPreview = URL.createObjectURL(file);
    }
    if (type === 'aadharBack') {
      this.farmerAdharback = file;
      this.aadharBackPreview = URL.createObjectURL(file);
    }
  }
  onNameStateCityInput(event: any, field: 'username' | 'state' | 'city') {
    const value = event.target.value;
    const sanitized = value.replace(/[^a-zA-Z ]/g, '');
    this.faremer[field] = sanitized;
  }
  onPhoneInput(event: any) {
    const value = event.target.value.replace(/[^0-9]/g, '');
    this.faremer.phoneno = value;
  }
  onEmailInput(event: any) {
    this.faremer.email = event.target.value.replace(/[^a-zA-Z0-9@._-]/g, '');
  }
  onSubmit(form: NgForm) {
    if (
      form.invalid ||
      !this.farmerAdhar ||
      !this.farmerAdharback
    ) {
      Object.values(form.controls).forEach((control: any) => {
        (control as NgModel).control?.markAsTouched();
      });
      alert('Please fill all fields & upload Aadhar images');
      return;
    }
    if (this.faremer.role === "farmer") {
      const farmerdata = new FormData();
      farmerdata.append('username', this.faremer.username);
      farmerdata.append('address', this.faremer.address);
      farmerdata.append('email', this.faremer.email);
      farmerdata.append('password', this.faremer.password);
      farmerdata.append('phoneno', this.faremer.phoneno);
      farmerdata.append('state', this.faremer.state);
      farmerdata.append('status', this.faremer.status.toString());
      farmerdata.append('farmerAdhar', this.farmerAdhar);
      farmerdata.append('farmerAdharback', this.farmerAdharback);
      this.webclient.postdata('/farmer-register', farmerdata)
        .subscribe({
          next: (data: any) => {
            console.log(farmerdata);
            console.log(data)
            alert(data.username + 'you are Registered Successfully. Admin verification within 24 hours.');
            this.router.navigateByUrl("/startfarmer");
          },
          error(err) {
            alert("Internal Server Error Please Fill Form Again")
          },
        });
    }
    if (this.faremer.role === "customer") {
      const farmerdata = new FormData();
      farmerdata.append('username', this.faremer.username);
      farmerdata.append('address', this.faremer.address);
      farmerdata.append('email', this.faremer.email);
      farmerdata.append('password', this.faremer.password);
      farmerdata.append('phoneno', this.faremer.phoneno);
      farmerdata.append('state', this.faremer.state);
      farmerdata.append('status', this.faremer.status.toString());
      this.customerAdhar = this.farmerAdhar;
      this.customerAdharback = this.farmerAdharback;
      farmerdata.append("customerAdhar", this.customerAdhar)
      farmerdata.append("customerAdharback", this.customerAdharback)
      console.log(this.customerAdhar)
      console.log(this.customerAdharback)
      this.webclient.postdata('/customer-register', farmerdata)
        .subscribe({
          next: (data: any) => {
            console.log(farmerdata);
            console.log(data)
            alert(data.username + 'you are Registered Successfully. Admin verification within 24 hours.');
            this.router.navigateByUrl("/startfarmer");
          },
          error(_err) {
            alert("Internal Server Error Please Fill Form Again")
          },
        });
    }
  }
}