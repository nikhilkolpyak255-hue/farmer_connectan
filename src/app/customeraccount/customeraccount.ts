import { Component, inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Customer } from '../entities/Customer';
import { WebClientService } from '../../web-client-service';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-customeraccount',
  standalone: false,
  templateUrl: './customeraccount.html',
  styleUrl: './customeraccount.scss',
})
export class Customeraccount implements OnInit {
  ngOnInit(): void {

    this.getcutomerdata()
  }

  loading = true;
  avatarPreview: any = null;
  profileFile: File | null = null;
  customer = new Customer()

  private webclient = inject(WebClientService)
  private cd=inject(ChangeDetectorRef)
  cid = localStorage.getItem('id')
  getcutomerdata() {
    this.webclient.getdata(`/get-customer/${this.cid}`).subscribe({
      next: (data: any) => {
        this.customer = data;
        
        console.log(this.customer);
        this.cd.detectChanges();
      }
  
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


  // Handle profile image selection
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Image must be under 5MB');
      event.target.value = '';
      return;
    }

    this.profileFile = file;
    this.avatarPreview = URL.createObjectURL(file);
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

  }

  deleteAccount()
  {
    
  }
}