import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Product } from '../product/product';
import { Products } from '../entities/Products';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmerbidrequest',
  standalone: false,
  templateUrl: './farmerbidrequest.html',
  styleUrl: './farmerbidrequest.scss',
})
export class Farmerbidrequest implements OnInit{
  ngOnInit(): void {
    this.getproductlist()
  }

  productlist:Products[]=[]

  private webclient=inject(WebClientService)
  private router=inject(Router)
 private cd = inject(ChangeDetectorRef);
  getproductlist()
  {
    let fid=localStorage.getItem('id')
    console.log("Farmer ID:", fid) 
    this.webclient.getdataSingalid(`/getfarmer-product/${fid}`).subscribe({next:(data)=>{
      console.log(data)
      this.productlist=data;
      console.log("Product List:", this.productlist);
        this.cd.detectChanges();
    },
    error(err) {
      alert('not have any bidding request.........')
    },
  })
  }

  nextpage(pid:any)
  {
      sessionStorage.setItem("pid",pid)  
      this.router.navigate(["/biddingend"])  
  }
}
