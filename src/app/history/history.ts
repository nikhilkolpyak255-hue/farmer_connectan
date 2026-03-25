import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { WebClientService } from '../../web-client-service';
import { Bidding } from '../entities/Bidding';
import { Products } from '../entities/Products';

@Component({
  selector: 'app-history',
  standalone: false,
  templateUrl: './history.html',
  styleUrl: './history.scss',
})
export class History implements OnInit {
   ngOnInit(): void {
     this.loadHistory();
   }
 
   bidHistory: any[] = [];
   loading: boolean = false;
 
   private webclient = inject(WebClientService);
   private toastr = inject(ToastrService);
   private cd= inject(ChangeDetectorRef);
  
   loadHistory() {
     const cid = localStorage.getItem("id");
 
     if (!cid) {
       this.toastr.error("Customer not found");
       return;
     }
 
     this.loading = true;
 
     this.webclient.getdata(`/getcutomer-biddata/${cid}`).subscribe({
       next: (data: any) => {
         this.bidHistory = data || [];
 
         // Sort latest first
         this.bidHistory.sort((a: any, b: any) =>
           new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime()
          
         );
 
         this.loading = false;
         this.cd.detectChanges();
       },
       error: (err) => {
         this.loading = false;
 
         if (err.status === 204) {
           this.bidHistory = [];
         } else {
           this.toastr.error("Failed to load history");
         }
       }
     });
   }
}
