import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  username: string = '';
  image: string = '';
  @Output() onSubmit = new EventEmitter<any>();

  onImageSelected(image: string) {
    this.image = image;
  }

  handleSubmit() {
    const formData = {
      username: this.username,
      image: this.image,
    };
    // Call the function passed as a prop
    this.onSubmit.emit(formData);
    this.username = '';
    this.image = '';
  }
}
