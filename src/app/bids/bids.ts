import { ChangeDetectorRef, Component } from '@angular/core';
import { inject } from '@angular/core';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';
import { Products } from '../entities/Products';
@Component({
  selector: 'app-bids',
  standalone: false,
  templateUrl: './bids.html',
  styleUrl: './bids.scss',
})
export class Bids {
    productlist: Products[] = [];

  private webclient = inject(WebClientService);
  private router = inject(Router);
  private cd=inject(ChangeDetectorRef)
  ngOnInit(): void {
    this.getproductlist();
  }

  getproductlist() {

    let fid = localStorage.getItem('id');

    console.log("Farmer ID:", fid);

    this.webclient.getdataSingalid(`/getfarmer-product/${fid}`).subscribe({
      next: (data: any[]) => {

        console.log("API Data:", data);

        this.productlist = data;

        console.log("Product List:", this.productlist);
        console.log("Length:", this.productlist.length);
         this.cd.detectChanges();
      },
      error: (err: any) => {
        console.log(err);
        alert("No bidding requests found");
      }
    });

  }

  nextpage(pid: any) {

    sessionStorage.setItem("pid", pid);

    this.router.navigate(["/biddingend"]);

  }

}
