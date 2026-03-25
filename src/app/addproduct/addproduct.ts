// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-addproduct',
//   standalone: false,
//   templateUrl: './addproduct.html',
//   styleUrl: './addproduct.scss',
// })
// export class Addproduct {

//   product = {
//     name: '',
//     description: '', 
//     price: '',
//     quantity: '',
//     quality: '',
//     type: '',
//   image: ''
  
//  }
// previews: string[] = [];

//   onFilesSelected(event: Event) {
//     const input = event.target as HTMLInputElement;
//     if (!input.files) return;

//     Array.from(input.files).forEach(file => {
//       if (!file.type.startsWith('image/')) return;

//       const reader = new FileReader();
//       reader.onload = () => {
//         this.previews.push(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     });

//     input.value = '';
//   }

// }
