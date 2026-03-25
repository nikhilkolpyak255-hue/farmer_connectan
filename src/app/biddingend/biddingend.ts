import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';
import { Bidding } from '../entities/Bidding';
import { Products } from '../entities/Products';

@Component({
  selector: 'app-biddingend',
  standalone: false,
  templateUrl: './biddingend.html',
  styleUrl: './biddingend.scss',
})
export class Biddingend implements OnInit {
  ngOnInit(): void {
    this.getbiddingValue()
  }



  bidlist: Bidding[] | any;

  private webclient = inject(WebClientService)
  private router = inject(Router)
  private cd = inject(ChangeDetectorRef)
  getbiddingValue() {

    let pid = sessionStorage.getItem("pid")
    this.webclient.getdataSingalid(`/get-placedvalue/${pid}`).subscribe({
      next: (data) => {
        console.log(data)
        this.bidlist = data;
        this.cd.detectChanges();
      }
    })
  }

  acceptBid(bid: any) {
    console.log(bid)
  }

  rejectBid(bid: any) {
    console.log(bid)

  }
}
