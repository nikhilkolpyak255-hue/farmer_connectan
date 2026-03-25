import { ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { Bidding } from '../entities/Bidding';
import { FormsModule } from '@angular/forms';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bid-value',
  standalone: false,
  templateUrl: './bid-value.html',
  styleUrl: './bid-value.scss',
})
export class BidValue implements OnInit {
  ngOnInit(): void {

    this.getBiddingvalue()
  }


  newBidValue: number = 0;
  bidvalue = new Bidding()

  private webclient = inject(WebClientService)
  private router = inject(Router)
  private cd = inject(ChangeDetectorRef);
  getBiddingvalue() {
    let Bid = localStorage.getItem("id")
    this.webclient.getdataSingalid(`/getold-bidvalue/${Bid}`).subscribe({
      next: (data) => {
        console.log(data)
        this.bidvalue = data
        console.log(Bid)
        this.newBidValue = data.biddingPrice
        this.cd.detectChanges();
      },
      error(err) {
        alert(err)
      },
    })
  }


  placeBid(bid: number) {

    console.log(this.bidvalue)

    this.webclient.putdata(`/replace-bidvalue/${bid}`, this.bidvalue).subscribe({
      next: (data) => {
        alert("Bid Replaced Successfully ...............")
      },
      error(err) {
        alert(err)
      },
    })
  }
}