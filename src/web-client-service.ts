import { Injectable } from '@angular/core';
import { environment } from './app/environments/environment.developmet';
import { Farmer } from './app/entities/Farmer';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from './app/entities/Customer';
import { Bidding } from './app/entities/Bidding';

@Injectable({
  providedIn: 'root',
})
export class WebClientService {

  private username: any;
  private password: any;
  private readonly base_url = 'http://localhost:8080';

  constructor(private http: HttpClient,) {

  }

  public postdata<T, U>(url: string, formdata: any): Observable<U> {
    return this.http.post<U>(`${this.base_url}${url}`, formdata);
  }


  public getdata(url: String): Observable<any> {
    return this.http.get<any>(`${this.base_url}${url}`);
  }

  public getdataByid(url: string, formdata: any): Observable<any> {
    return this.http.post<any>(`${this.base_url}${url}`, formdata);
  }

  public putdata(url: string, formdata: any): Observable<any> {
    return this.http.put<any>(`${this.base_url}${url}`, formdata)
  }


  public putdataid(url:string, data:any): Observable<any> {
    return this.http.put<any>(`${this.base_url}${url}`, data);
  }

  public deletedata(url: string) {
    return this.http.delete(`${this.base_url}${url}`)
  }

    public getdataSingalid(url: string): Observable<any> {
      return this.http.get<any>(`${this.base_url}${url}`);
    
  }
  // public post<T, U>(url: string, body: T): Observable<U>
  // {
  //   return this.http.post<U>(`${this.base_url}${url}`, body, {
  //     headers: {
  //       TOKEN: this.token ?? ''
  //     }
  //   });

public updatePassword(url: string, data: any) {
  return this.http.put(`${this.base_url}${url}`, data,{ responseType: 'text' });
}
  isLogedIn() {
    return localStorage.getItem('id');
  }
 placeBid(bid: Bidding): Observable<any> {
    const formData = new FormData();

    formData.append("biddingPrice", bid.biddingPrice.toString());
    formData.append("customerId", bid.customerId.toString());
    formData.append("productId", bid.productId.toString());
    formData.append("dateTime", bid.dateTime);

    return this.http.post(`${this.base_url}/bidding-value`, formData);
  }

  // Get existing bid
  getOldBid(productId: number): Observable<any> {
    return this.http.get(`${this.base_url}/getold-bidvalue/${productId}`);
  }

  // Replace bid
  replaceBid(id: number, bid: Bidding): Observable<any> {
    return this.http.put(`${this.base_url}/replace-bidvalue/${id}`, bid);
  }

  // Get all bids
  getAllBids(): Observable<any> {
    return this.http.get(`${this.base_url}/getall-biddingdata`);
  }
  // isLogedOut()
  // {
  //   sessionStorage.clear();
  // }
  //  public delete<T>(url: string): Observable<T>
  // {
  //   return this.http.delete<T>(`${this.base_url}${url}`, {
  //     headers: {
  //       TOKEN: this.token ?? ''
  //     }
  //   });
  // }

  // public post<T, U>(url: string, body: T): Observable<U>
  // {
  //   return this.http.post<U>(`${this.base_url}${url}`, body, {
  //     headers: {
  //       TOKEN: this.token ?? ''
  //     }
  //   });
  // }

  // public put<T, U>(url: string, body: T): Observable<U>
  // {
  //   return this.http.put<U>(`${this.base_url}${url}`, body, {
  //     headers: {
  //       TOKEN: this.token ?? ''
  //     }
  //   });
  // }
}
