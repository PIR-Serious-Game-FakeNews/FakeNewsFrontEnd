import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PlayerSetupPageComponent } from './player-setup-page/player-setup-page.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { LocationListComponent } from './location-list/location-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ProfileImageSelectorComponent } from './profile-image-selector/profile-image-selector.component';
import { UserItemComponent } from './user-item/user-item.component';
import { LocationItemComponent } from './location-item/location-item.component';
import { ContinentItemComponent } from './continent-item/continent-item.component';
import { PlayerItemComponent } from './player-item/player-item.component';
import { NewsModalComponent } from './news-modal/news-modal.component';
import { UserInfoDetailsComponent } from './user-info-details/user-info-details.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { ActionModalComponent } from './action-modal/action-modal.component';
import { PublishModalComponent } from './publish-modal/publish-modal.component';
import { ActionConfirmationModalComponent } from './action-confirmation-modal/action-confirmation-modal.component';
import { NotificationModalComponent } from './notification-modal/notification-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    MainPageComponent,
    PlayerSetupPageComponent,
    PlayerListComponent,
    LocationListComponent,
    AddUserComponent,
    ProfileImageSelectorComponent,
    UserItemComponent,
    LocationItemComponent,
    ContinentItemComponent,
    PlayerItemComponent,
    NewsModalComponent,
    UserInfoDetailsComponent,
    NewsItemComponent,
    ActionModalComponent,
    PublishModalComponent,
    ActionConfirmationModalComponent,
    NotificationModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatBadgeModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
