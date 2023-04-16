import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent {
  @Input() user: any;
  @Output() onDelete = new EventEmitter<any>();

  handleDelete() {
    this.onDelete.emit(this.user);
  }
}
