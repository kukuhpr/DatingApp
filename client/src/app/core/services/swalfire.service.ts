import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalfireService {
  constructor() {}
  SuccessMessage(message: string) {
    Swal.fire({
      title: 'Success !',
      text: message,
      icon: 'success',
      confirmButtonColor: 'rgb(3, 142, 220)',
      confirmButtonText: 'OK',
    });
  }

  WarningMessage(message: string) {
    Swal.fire({
      title: 'Perhatian !',
      text: message,
      icon: 'warning',
      confirmButtonColor: 'rgb(3, 142, 220)',
      confirmButtonText: 'OK',
    });
  }

  ErrorMessage(message: string) {
    Swal.fire({
      title: 'Gagal !',
      text: message,
      icon: 'error',
      confirmButtonColor: 'rgb(3, 142, 220)',
      confirmButtonText: 'OK',
    });
  }

  ConfirmMessage(message: string, event: string) {
    return Swal.fire({
      title: 'Ingin Melanjutkan ?',
      text: message,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: 'rgb(3, 142, 220)',
      cancelButtonColor: 'rgb(243, 78, 78)',
      confirmButtonText: 'Yes, ' + event + '!',
    });
  }
}
