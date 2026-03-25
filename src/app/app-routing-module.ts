import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerNavbar } from './farmer-navbar/farmer-navbar';
import { CustomerNavbar } from './customer-navbar/customer-navbar';
import { Loginpage } from './loginpage/loginpage';
import { FarmerHomepage } from './farmer-homepage/farmer-homepage';
import { CustomerHomepage } from './customer-homepage/customer-homepage';
import { Aboutus } from './aboutus/aboutus';
import { FarmerRegister } from './farmer-register/farmer-register';
import { Startfarmer } from './startfarmer/startfarmer';
import { Viewfarmers } from './viewfarmers/viewfarmers';
import { Testing } from './testing/testing';
import { Layout } from './layout/layout';
import { Viewcustomers } from './viewcustomers/viewcustomers';
import { Dashboard } from './dashboard/dashboard';
import { Product } from './product/product';
import { farmerguardGuard } from './farmerguard-guard';
import { Adminlogin } from './adminlogin/adminlogin';
import { Account } from './account/account';
import { Newusers } from './newusers/newusers';
import { Newcustomers } from './newcustomers/newcustomers';
import { Viewproduct } from './viewproduct/viewproduct';
import { Addjunction } from './addjunction/addjunction';
import { Customeraccount } from './customeraccount/customeraccount';
import { Rentjunction } from './rentjunction/rentjunction';
import { Wasteadd } from './wasteadd/wasteadd';
import { Customerabout } from './customerabout/customerabout';
import { Messages } from './messages/messages';
import { Verifyemail } from './verifyemail/verifyemail';
import { Otpverify } from './otpverify/otpverify';
import { Changepassword } from './changepassword/changepassword';
import { Cutomerpendingbid } from './cutomerpendingbid/cutomerpendingbid';
import { BidValue } from './bid-value/bid-value';
import { Farmerbidrequest } from './farmerbidrequest/farmerbidrequest';
import { Biddingend } from './biddingend/biddingend';
import { Purchase } from './purchase/purchase';
import { Bidding } from './entities/Bidding';
import { PlaceBid } from './place-bid/place-bid';
import { Bids } from './bids/bids';
import { Bidtest } from './bidtest/bidtest';
import { History } from './history/history';
const routes: Routes = [

  {
    path: "faremrnavbar",
    component: FarmerNavbar,
    canActivate: [farmerguardGuard]
  },
  {
    path: "login",
    component: Loginpage,
  },
  {
    path: "",
    component: Loginpage,
  },
  {
    path: "customernavbar",
    component: CustomerNavbar,
    canActivate: [farmerguardGuard]
  },
  {
    path: "farmerhomepage",
    component: FarmerHomepage,
    canActivate: [farmerguardGuard]
  },
  {
    path: "customerhomepage",
    component: CustomerHomepage,
    canActivate: [farmerguardGuard]
  },
  {
    path: "aboutus",
    component: Aboutus,
    canActivate: [farmerguardGuard]
  },
  {
    path: "farmerregister",
    component: FarmerRegister,
  },
  {
    path: "startfarmer",
    component: Startfarmer,
  },
  {
    path: "viewfarmers",
    component: Viewfarmers,
    canActivate: [farmerguardGuard]
  },
  {
    path: "viewcustomer",
    component: Viewcustomers,
    canActivate: [farmerguardGuard]
  },
  {
    path: "testing",
    component: Testing,
    canActivate: [farmerguardGuard]
  },

  {
    path: "product",
    component: Product,
    canActivate: [farmerguardGuard]
  },

  {
    path: "adminlogin",
    component: Adminlogin,
    canActivate: [farmerguardGuard]

  },

  {
    path: "account",
    component: Account,
    canActivate: [farmerguardGuard]

  },

  {
    path: "addjunction",
    component: Addjunction,
    canActivate: [farmerguardGuard]

  },
  {
    path: "customeraccount",
    component: Customeraccount,
    canActivate: [farmerguardGuard]

  },
  {
    path: "rentjunction",
    component: Rentjunction,
    canActivate: [farmerguardGuard]

  },

  {
    path: 'addwaste',
    component: Wasteadd
  },

  {
    path: 'customerabout',
    component: Customerabout
  },

  {
    path:'verifyemail',
    component:Verifyemail
  },

  {
    path:'optverify',
    component:Otpverify
  },

  {
    path:'changepassword',
    component:Changepassword
  },

  {
    path:'pendingbid',
    component:Cutomerpendingbid
  },

  {
    path:'BidValue',
    component:BidValue
  },
  
  {
    path:'farmerbidrequest',
    component:Farmerbidrequest
  },

  {
    path:"biddingend",
    component:Biddingend
  },
  {
    path: "purchase",
    component: Purchase,
    canActivate: [farmerguardGuard]
  },
  {
    path:"placebid",
    component:PlaceBid,
    canActivate:[farmerguardGuard]
  },
  {
    path:"bids",
    component:Bids,
    canActivate:[farmerguardGuard]
  },
  {
    path:"bidvalue",
    component:Bidtest,
    canActivate:[farmerguardGuard]
  },

  {
    path:"history",
    component:History,
    canActivate:[farmerguardGuard]
  },
  {
    path: "admin",
    component: Layout,
    // canActivate: [farmerguardGuard],
    children: [

      {
        path: "dashboard",
        component: Dashboard,
      },
      {
        path: "",
        component: Dashboard,

      },
      {
        path: "viewfarmers",
        component: Viewfarmers
      },
      {
        path: "viewcustomer",
        component: Viewcustomers
      },
      {
        path: "newuser",
        component: Newusers,
      },
      {
        path: "newcustomers",
        component: Newcustomers
      },
      {
        path: "viewproduct",
        component: Viewproduct
      },
      {
        path: "message",
        component: Messages
      }
    ]
  },

  {
    path: "admin",
    loadChildren: () => import('./layout/layout').then(m => m.Layout)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
