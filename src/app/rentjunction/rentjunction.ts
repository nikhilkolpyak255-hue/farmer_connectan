import { Component, inject, OnInit, signal } from '@angular/core';
import { Junction } from '../entities/Junction';
import { WebClientService } from '../../web-client-service';
import { Subject } from 'rxjs';
import { Loader } from '../loader/loader';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-rentjunction',
  standalone: false,
  templateUrl: './rentjunction.html',
  styleUrl: './rentjunction.scss',
})
export class Rentjunction implements OnInit {


  public loader: boolean = false;
  searchTerm = ''
  junction: Junction[] = []


  webclient = inject(WebClientService);
  private cd=inject(ChangeDetectorRef);
  ngOnInit(): void {

    this.getjuctiondata();

  }


  getjuctiondata() {

    this.loader = true
    this.webclient.getdata('/get-junction').subscribe({
      next: (data: any) => {

        this.junction = data;
        this.loader=false
        console.log(data)
        this.cd.detectChanges();
      },
      error(err) {
        alert("no data found....")
      },
    })
  }


  to = 'loharprem471@gmail.com';
  subject = 'Farmer-Connect Email Testing'



  rentNow(id: any) {

    const formdata = new FormData()
    formdata.append("to", this.to)
    formdata.append("subject", this.subject)

    this.webclient.postdata('/email-Sending', formdata).subscribe({
      next: (data: any) => {
        alert("success email")
      }
    })

  }
}
