import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../providers/toast/toast.service';
import { Message } from '../../class/message/message';

@Component({
  selector: 'app-toast-messages',
  templateUrl: './toast-messages.component.html',
  styleUrls: ['./toast-messages.component.scss']
})
export class ToastMessagesComponent implements OnInit {

  messages: any;

  constructor(private toast: ToastService) { }

  ngOnInit() {
    this.messages = this.toast.getMessages();
  }

  dismiss(message: Message) {
    this.toast.dismissMessage(message);
  }

}
