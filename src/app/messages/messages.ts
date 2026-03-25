import { Component, inject, OnInit, signal } from '@angular/core';
import { Contact } from '../entities/Contact';
import { WebClientService } from '../../web-client-service';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.html',
  styleUrl: './messages.scss',
})
export class Messages implements OnInit {
  ngOnInit(): void {
    this.getmessages()
  }

  contact = signal<Contact[]>([])

  private webclient = inject(WebClientService);

  getmessages() {
    this.webclient.getdata('/messages').subscribe({
      next: (data: any) => {
        this.contact.set(data)
      },
      error(err) {
        alert("Internal Server Issue ...")
      },
    })
  }


  complete(id: any) {
    this.webclient.deletedata(`/deletemess/${id}`).subscribe({
      next: (data) => {
        alert(` Task is Completed .........`)
        this.getmessages()
      },
      error(err) {
        alert('Somethig is Wrong Try again....')
      },
    })
  }
}
