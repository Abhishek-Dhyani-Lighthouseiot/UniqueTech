import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

declare var $ : any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  
  constructor(private toast : ToastrService)
  {

  }
  
  sendMail()
  {

  }

}