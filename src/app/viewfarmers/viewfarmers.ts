import { Component, inject, OnInit, signal } from '@angular/core';
import { Farmer } from '../entities/Farmer';
import { WebClientService } from '../../web-client-service';
@Component({
  selector: 'app-viewfarmers',
  standalone: false,
  templateUrl: './viewfarmers.html',
  styleUrl: './viewfarmers.scss',
})
export class Viewfarmers implements OnInit {

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

  blockFarmer(fid: Number) {

    this.farmer.status = 0;
    const formdata = new FormData()
    formdata.append("status", this.farmer.status.toString());

    this.webclient.putdata(`/update-farmerstatus/${fid}`, formdata).subscribe({
      next: (data: any) => {
        alert(data.username + "Blocked Successfully")
        this.getfarmers()
      },
      error(err) {
        alert("Internal Server Error Please Try again..")
      },
    })

  }
  unblockFarmer(fid: Number) {

  }
}
