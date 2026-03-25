import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customer-navbar',
  standalone: false,
  templateUrl: './customer-navbar.html',
  styleUrl: './customer-navbar.scss',
})
export class CustomerNavbar {

    menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeAll(): void {
    this.menuOpen = false;
  }
}
