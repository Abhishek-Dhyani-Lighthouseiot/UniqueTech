import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-get-contact-modal',
  templateUrl: './get-contact-modal.component.html',
  styleUrls: ['./get-contact-modal.component.css']
})
export class GetContactModalComponent {

  constructor(private toast : ToastrService) {
    
  }
}
