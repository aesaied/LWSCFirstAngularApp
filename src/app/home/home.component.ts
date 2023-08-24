import { Component } from '@angular/core';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  saveFile(data: any) {

  }

  handleDenial() {

  }

  handleDismiss(data: any) {

  }

  ShowAlert() {

    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    });
  }

}
