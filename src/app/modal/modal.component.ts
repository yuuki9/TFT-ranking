import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  imports:[FormsModule],
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterViewInit{
  
  
  formData = {
    name: '',
    deck: '',
    message: '',
    thisday: ''
  };
  closeModal? : Function

  ngAfterViewInit(): void {
    
  };
  onFormSubmit() : void {
    // 폼 데이터 전송 로직 추가
    console.log('Form data:', this.formData);
  }

  close():void {
    if(this.closeModal != undefined) this.closeModal();
  }
}
