import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { WebClientService } from '../../web-client-service';
import { Junction } from '../entities/Junction';

@Component({
  selector: 'app-addjunction',
  standalone: false,
  templateUrl: './addjunction.html',
  styleUrl: './addjunction.scss',
})
export class Addjunction {

  junction = new Junction();
  // Junction model
  // junction = {
  //   juncname: '',
  //   cost: '',
  //   address: '',
  //   description: ''
  // };

  // File uploads
  image1: File | null = null;
  image2: File | null = null;
  image1Preview: any = null;
  image2Preview: any = null;

  submitting = false;

  readonly allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  readonly maxSize = 5 * 1024 * 1024;

  private webclient = inject(WebClientService);
  private router = inject(Router);

  onFileSelect(event: any, type: 'image1' | 'image2') {
    const file: File = event.target.files[0];
    if (!file) return;

    if (!this.allowedTypes.includes(file.type)) {
      alert('Only JPG, PNG, WebP images allowed');
      return;
    }
    if (file.size > this.maxSize) {
      alert('Image size must be less than 5MB');
      return;
    }

    if (type === 'image1') {
      this.image1 = file;
      this.image1Preview = URL.createObjectURL(file);
    } else {
      this.image2 = file;
      this.image2Preview = URL.createObjectURL(file);
    }
  }

  onSubmit(form: NgForm) {
    if (
      form.invalid ||
      !this.junction.juncname ||
      !this.junction.cost ||
      !this.junction.address ||
      !this.junction.description ||
      !this.image1 ||
      !this.image2
    ) {
      alert('Please fill all fields and upload both images');
      Object.values(form.controls).forEach((control: any) => {
        control.markAsTouched();
      });
      return;
    }

    const jundata = new FormData()

    this.junction.farmerId = localStorage.getItem("id")
    jundata.append('address', this.junction.address.trim());
    jundata.append('cost', this.junction.cost.toString().trim());
    jundata.append('description', this.junction.description.trim());
    jundata.append('juncname', this.junction.juncname.trim());
    jundata.append('farmerId', this.junction.farmerId);
    jundata.append('img1', this.image1);
    jundata.append('img2', this.image2);

    console.log(jundata)

    this.webclient.postdata('/add-junction', jundata).subscribe({
      next: (data: any) => {
        alert("successfully added...")
        console.log(data)
      }
    })
  }
}
