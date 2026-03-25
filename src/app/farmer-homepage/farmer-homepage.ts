import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { WebClientService } from '../../web-client-service';

@Component({
  selector: 'app-farmer-homepage',
  standalone: false,
  templateUrl: './farmer-homepage.html',
  styleUrl: './farmer-homepage.scss',
})
export class FarmerHomepage implements AfterViewInit  {
  
private webclent=inject(WebClientService) 
  ngOnInit(): void {
    this.webclent.isLogedIn()
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
