import { Component, inject, OnInit, signal } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { WebClientService } from '../../web-client-service';
import { Farmer } from '../entities/Farmer';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-account',
  standalone: false,
  templateUrl: './account.html',
  styleUrl: './account.scss',
})
export class Account implements OnInit {

  ngOnInit(): void {
    this.getdetails()
  }

  faremer = signal<Farmer[] | any>([])

  loading = true;
  avatarPreview: any = null;
  profileFile: File | null = null;

  private webclient = inject(WebClientService);
  private router = inject(Router)
  private cd=inject(ChangeDetectorRef);
  id = localStorage.getItem('id')
  getdetails() {
    this.loading = false
    this.webclient.getdata(`/farmer-getbyid/${this.id?.toString()}`).subscribe({
      next: (data: any) => {
        console.log(data);
        this.avatarPreview = data.farmerImg;
        this.faremer.set(data)
        this.loading = false
      },
      error(err) {
        err.loading = false
      },
    })
  }

  // Input sanitization
  onlyText(event: KeyboardEvent) {
    const char = String.fromCharCode(event.which || event.keyCode);
    if (!/^[a-zA-Z\s]+$/.test(char)) event.preventDefault();
  }

  onlyNumbers(event: KeyboardEvent) {
    const char = String.fromCharCode(event.which || event.keyCode);
    if (!/[0-9]/.test(char)) event.preventDefault();
  }

  allowTextNumbers(event: KeyboardEvent) {
    const char = String.fromCharCode(event.which || event.keyCode);
    if (!/^[a-zA-Z0-9\s,.-]+$/.test(char)) event.preventDefault();
  }

  allowPassword(event: KeyboardEvent) {
    const char = String.fromCharCode(event.which || event.keyCode);
    if (!/^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]$/.test(char)) {
      event.preventDefault();
    }
  }

imagePreview: string | ArrayBuffer | null = null;

onFileChange(event: any) {
  const file = event.target.files[0];
  if (!file) return;

  if (file.size > 5 * 1024 * 1024) {
    alert('Image must be under 5MB');
    event.target.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result;
    this.cd.detectChanges();
  };

  reader.readAsDataURL(file);
  this.cd.detectChanges();
}

  // Submit form
  onSubmit(form: NgForm) {
    if (form.invalid || !this.profileFile) {
      Object.values(form.controls).forEach((control: any) => {
        (control as any).control?.markAsTouched();
      });
      alert('Please fill all required fields and upload a profile image');
      return;
    }

    const formData = new FormData();
    formData.append('username', this.faremer().username);
    formData.append('email', this.faremer().email);
    formData.append('password', this.faremer().password)
    formData.append('phoneno', this.faremer().phoneno);
    formData.append('address', this.faremer().address);
    formData.append('state', this.faremer().state);
    formData.append('city', this.faremer().city);
    formData.append('profileImage', this.profileFile);

    this.webclient.putdata(`/update-farmer/${this.id}`, formData).subscribe({
      next: (data: any) => {
        console.log(data)
        alert(`${data.username} your detail updated scuccessfuly....`)
      }
    })

  }
  deleteAccount() {

  }
}
