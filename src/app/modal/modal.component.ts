import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  imports:[FormsModule],
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  formData = {
    name: '',
    age: null,
    email: '',
    message: ''
  };

  onFormSubmit() : void {
    // 폼 데이터 전송 로직 추가
    console.log('Form data:', this.formData);
  }
}
