import { Component, inject, OnInit } from '@angular/core';
import { Products } from '../entities/Products';
import { WebClientService } from '../../web-client-service';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-purchase',
  standalone: false,
  templateUrl: './purchase.html',
  styleUrl: './purchase.scss',
})
export class Purchase implements OnInit {
  ngOnInit(): void {
    this.getproductlist()
  }
  loading: boolean = true;
  errorMessage: string = '';
  products: Products[] = []

  private webclient = inject(WebClientService)
  private router = inject(Router)
  private cd = inject(ChangeDetectorRef);
  getproductlist() {
    let fid = localStorage.getItem('id')
    console.log("Farmer ID:", fid)
    this.webclient.getdataSingalid(`/get-product`).subscribe({
      next: (data) => {
        console.log(data)
        this.products = data;

        this.cd.detectChanges();
      },
      error(err) {
        alert('not have any bidding request.........')
      },
    })
  }

  nextpage(pid: any) {
    localStorage.setItem("pid", pid)
    this.router.navigate(["/bidvalue"])
  }
}
