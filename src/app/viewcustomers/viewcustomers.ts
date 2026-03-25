import { Component, inject, OnInit, signal } from '@angular/core';
import { Farmer } from '../entities/Farmer';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';
import { Customer } from '../entities/Customer';

@Component({
  selector: 'app-viewcustomers',
  standalone: false,
  templateUrl: './viewcustomers.html',
  styleUrl: './viewcustomers.scss',
  // template:`<button class="btn block" (click)="blockCustomer( )">Block</button>`
})
export class Viewcustomers implements OnInit {


  customers = signal<Customer[]>([]);

  farmer: Farmer[] = [];

  username: any = ''
  password: any = ''


  searchTerm = ''
  constructor(private router: Router,) { }
  // private toastr=inject(ToastrService)
  ngOnInit(): void {
    this.getCustomers();
  }
  private webclient = inject(WebClientService);



  geuserbyid() {

    const formdata = new FormData();

    formdata.append('username', this.username.trim()),
      formdata.append('password', this.password.trim())

    return this.webclient.getdataByid('/farmer-login', formdata).subscribe((data: any) => {

      console.log(data);
      this.farmer = data;
      this.router.navigateByUrl('/faremrnavbar')
    })
  }


  getCustomers() {
    return this.webclient.getdata('/get-customer').subscribe((data: any) => {
      console.log(data)
      this.customers.set(data);
    })
  }

  blockCustomer(email: any) {


    const formdata = new FormData();
    formdata.append('email', email);

    return this.webclient.postdata(`/block-customer`, formdata).subscribe((data: any) => {
      console.log(data)
      this.customers.set(data);
    })
  }

  unblockCustomer() {

  }
}
