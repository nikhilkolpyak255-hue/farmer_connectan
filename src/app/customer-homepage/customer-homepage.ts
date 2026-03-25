import { AfterViewInit, Component, OnInit } from '@angular/core';
import { WebClientService } from '../../web-client-service';

@Component({
  selector: 'app-customer-homepage',
  standalone: false,
  templateUrl: './customer-homepage.html',
  styleUrl: './customer-homepage.scss',
})
export class CustomerHomepage implements AfterViewInit  {
  constructor(private webclient:WebClientService ){}
  ngOnInit(): void {

    this.webclient.isLogedIn()
  }
ngAfterViewInit() {
    const elements = document.querySelectorAll('.animate');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }
}
