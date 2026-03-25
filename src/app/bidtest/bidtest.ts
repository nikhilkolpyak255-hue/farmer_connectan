import { Component } from '@angular/core';
import { WebClientService } from '../../web-client-service';
import { inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { Products } from '../entities/Products';
import { Bidding } from '../entities/Bidding';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-bidtest',
  standalone: false,
  templateUrl: './bidtest.html',
  styleUrl: './bidtest.scss',
})
export class Bidtest {
  bid: Bidding = new Bidding();

  product: Products[] = [];
  oldBidValue: number = 0;

  private webclient = inject(WebClientService);
  private toastr = inject(ToastrService);
  private cd = inject(ChangeDetectorRef);
  ngOnInit(): void {

    // ✅ Get IDs from localStorage
    const pid = localStorage.getItem("pid");
    const cid = localStorage.getItem("id");

    if (pid) this.bid.productId = Number(pid);
    if (cid) this.bid.customerId = Number(cid);

    // ✅ Load product
    this.webclient.getdataSingalid(`/get-product/${this.bid.productId}`).subscribe({
      next: (data: any) => {
        this.product = Array.isArray(data) ? data : [data];
        this.cd.detectChanges();
      },
      error: () => this.toastr.error("Failed to load product")
    });

    // ✅ Load old bid
    this.loadOldBid();
    this.cd.detectChanges();
  }

  // 🔁 Load previous bid
  loadOldBid() {
    this.webclient.getdataSingalid(`/getold-bidvalue/${this.bid.productId}`).subscribe({
      next: (data: any) => {
        if (data) {
          this.oldBidValue = data.biddingPrice;
          this.bid.bid = data.bid; // store ID for update
          this.bid.status = data.status;
        }
      },
      error: () => {
        this.oldBidValue = 0;
      }
    });
  }

  submitBid() {

    this.bid.dateTime = new Date().toISOString();

    const formData = new FormData();

    formData.append("biddingPrice", String(this.bid.biddingPrice));
    formData.append("customerId", String(this.bid.customerId));
    formData.append("productId", String(this.bid.productId));
    formData.append("dateTime", this.bid.dateTime);

    this.webclient.postdata(`/bidding-value`, formData)
      .subscribe({
        next: () => {
          this.toastr.success("✅ Bid Placed!");
        },
        error: (err) => {
          console.error("ERROR DETAILS:", err.error); // 🔥 IMPORTANT
          this.toastr.error("❌ Validation Failed");
          this.cd.detectChanges();
        }
      });
  }

}
