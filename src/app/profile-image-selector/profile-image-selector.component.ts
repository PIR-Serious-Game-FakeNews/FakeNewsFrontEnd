import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-image-selector',
  templateUrl: './profile-image-selector.component.html',
  styleUrls: ['./profile-image-selector.component.css'],
})
export class ProfileImageSelectorComponent {
  images = [
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Annie",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Abby",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Harley",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Dusty",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Missy",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Angel",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Coco",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Baby",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Mittens",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Bandit",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Abby",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Mimi",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Dusty",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Misty",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Coco",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Baby",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Daisy",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Bandit",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Bear",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Jack",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Mimi",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Casper",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Miss%20kitty",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Oscar",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Gracie",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Daisy",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Bear",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Jack",
    "https://api.dicebear.com/5.x/adventurer/svg?seed=Felix",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Annie",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Harley",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Casper",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Missy",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Miss%20kitty",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Angel",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Mittens",
    "https://api.dicebear.com/5.x/open-peeps/svg?seed=Gracie",
  ];
  selectedImage: string = "";

  @Output() selected = new EventEmitter<string>();

  selectImage(image: string) {
    this.selectedImage = image;
    this.selected.emit(image);
  }
}
