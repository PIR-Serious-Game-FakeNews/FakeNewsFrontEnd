import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
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
    UserInfoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
