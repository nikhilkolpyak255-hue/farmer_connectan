import { Component, inject, OnInit, signal } from '@angular/core';
import { WebClientService } from '../../web-client-service';
import { Farmer } from '../entities/Farmer';

@Component({
  selector: 'app-newusers',
  standalone: false,
  templateUrl: './newusers.html',
  styleUrl: './newusers.scss',
})
export class Newusers implements OnInit {

  ngOnInit(): void {
    this.getfarmers()
  }

  farmers = signal<Farmer[]>([]);
  searchTerm = ''
  farmer = new Farmer;

  private webclient = inject(WebClientService);

  getfarmers() {
    this.webclient.getdata('/farmer-list').subscribe({
      next: (data: any) => {
        this.farmers.set(data);
        console.log(data);
      },
      error(err) {
        alert("no farmers")
      },
    })
  }

  approve(id: Number) {

    console.log(id)

    this.farmer.status = 1;
    const formdata = new FormData()
    formdata.append("status", this.farmer.status.toString())
    this.webclient.putdata(`/update-farmerstatus/${id}`, formdata).subscribe({
      next: (data) => {

        alert(data.username + "allowed entry in Farmer-Connect..")
        this.getfarmers()
      },
      error(err) {
        alert("Something is wrong Please Try again..")
      },
    })
  }

}


