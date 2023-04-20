import { Component, EventEmitter, Input, Output } from '@angular/core';
import { fakeNews } from 'src/data/fakeNews';


@Component({
  selector: 'app-news-modal',
  templateUrl: './news-modal.component.html',
  styleUrls: ['./news-modal.component.css']
})
export class NewsModalComponent {
  fakeNews = fakeNews;
  /*@Input() title: string | undefined;
  @Input() message: string | undefined;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }*/
}
