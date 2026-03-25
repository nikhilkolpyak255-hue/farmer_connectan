import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Bidding } from '../entities/Bidding';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cutomerpendingbid',
  standalone: false,
  templateUrl: './cutomerpendingbid.html',
  styleUrl: './cutomerpendingbid.scss',
})
export class Cutomerpendingbid implements OnInit {
  ngOnInit(): void {
    this.getproductdata()
  }


  bidding: Bidding[] = []

  productarray = signal<Bidding[]>([]);
  private webclient = inject(WebClientService)
  private router=inject(Router)

  getproductdata() {
    let id = localStorage.getItem("id")
    this.webclient.getdataSingalid(`/getcutomer-biddata/${id}`).subscribe({
      next: (data: any) => {

        console.log(data)
        this.bidding = data;

        const map = new Map();

        this.bidding.forEach(bid => {
          if (!map.has(bid.productId)) {
            map.set(bid.productId, bid);
          }
        });

        const uniqueProducts = Array.from(map.values());

        this.productarray.set(uniqueProducts);

      },
      error(err) {

      },
    })
  }

  placeBid(productId:any,bid:any)
  {
     
    this.webclient.getdataSingalid(`/getold-bidvalue/${bid}`).subscribe({next:(data)=>{
      sessionStorage.setItem("bid",data.bid)
      this.router.navigate(['/BidValue'])
    },
  error(err) {
    alert("Please Try alter Bidding Traffic......")
  },})

  }
}

