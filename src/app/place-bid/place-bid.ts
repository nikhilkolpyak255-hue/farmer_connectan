import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Bidding } from '../entities/Bidding';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { Products } from '../entities/Products';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-place-bid',
  standalone: false,
  templateUrl: './place-bid.html',
  styleUrl: './place-bid.scss',
})
export class PlaceBid implements OnInit {
  constructor(private toastr: ToastrService) { }
  ngOnInit(): void {

    this.getBiddingvalue()
  }

  bid = new Bidding();
  newBidValue: number = 0;
  bidvalue = new Bidding()
  product: Products[] = []
  private webclient = inject(WebClientService)
  private router = inject(Router)
  private cd = inject(ChangeDetectorRef);
  getBiddingvalue() {
    let Bid = localStorage.getItem("id")
    let pid = localStorage.getItem("pid")
    this.webclient.getdataSingalid(`/get-product/${pid}`).subscribe({
      next: (data: any) => {
        console.log(data)
        this.product = Array.isArray(data) ? data : [data];
      },
      error(err) {
        alert(err)
      }
    })
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




  replaceBid(bid: number) {

    console.log(this.bidvalue)

    this.webclient.putdata(`/replace-bidvalue/${bid}`, this.bidvalue).subscribe({
      next: (data) => {
        alert("Bid Replaced Successfully ...............");

        window.location.reload();
      },
      error(err) {
        alert(err)
      },
    })
  }




}
