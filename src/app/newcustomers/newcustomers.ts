import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { WebClientService } from '../../web-client-service';
import { Customer } from '../entities/Customer';
import { Farmer } from '../entities/Farmer';

@Component({
  selector: 'app-newcustomers',
  standalone: false,
  templateUrl: './newcustomers.html',
  styleUrl: './newcustomers.scss',
})
export class Newcustomers {
  customers = signal<Customer[]>([]);

  farmer = new Farmer


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

  approve(id: Number) {

    console.log(id)

    this.farmer.status = 1;
    const formdata = new FormData()
    formdata.append("status", this.farmer.status.toString())
    this.webclient.putdata(`/update-customerstatus/${id}`, formdata).subscribe({
      next: (data) => {

        alert(data.username + "allowed entry in Farmer-Connect..")
        this.getCustomers()
      },
      error(err) {
        alert("Something is wrong Please Try again..")
      },
    })
  }
}
