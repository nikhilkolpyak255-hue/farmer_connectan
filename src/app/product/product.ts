import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../entities/Products';
import { NgForm } from '@angular/forms';
import { WebClientService } from '../../web-client-service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {


  productName:any=''
  // product:Products[]=[];
  product = new Products();

  // product = {
  //   name: '',
  //   description: '',
  //   price: '',
  //   quantity: '',
  //   quality: '',
  //   type: '',
  //   images: [] as File[],
  //   Field: ''
  // };

  preview1: string | null = null;
  preview2: string | null = null;

  image1: File | any = null;
  image2: File | any = null;

  private router = inject(Router)
  private webclient = inject(WebClientService);

  goHome() {
    this.router.navigate(['/farmerhomepage'])
  }
  onImageSelect(event: Event, imageNo: number) {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    const previewUrl = URL.createObjectURL(file);

    if (imageNo === 1) {
      this.image1 = file;
      this.preview1 = previewUrl;
    }

    if (imageNo === 2) {
      this.image2 = file;
      this.preview2 = previewUrl;
    }
  }

  // onSubmit(form: NgForm) {

  submit() {
    console.log(this.product)
    console.log(this.preview1, this.preview2)

    this.product.farmerId = localStorage.getItem('id');
    const formdata = new FormData()

    formdata.append('productName', this.productName);
    formdata.append('productType', this.product.productType);
    formdata.append('quantity', this.product.quantity);
    formdata.append('description', this.product.description);
    formdata.append('price', this.product.price);
    formdata.append('farmerId', this.product.farmerId)
    formdata.append('img1', this.image1);
    formdata.append('img2', this.image2);


    console.log(formdata)
    console.log(this.product.farmerId)

    this.webclient.postdata('/add-product', formdata).subscribe({
      next: (data: any) => {
        console.log(data)
        alert('Product added successfully.....')
      }
    })






  }

}
