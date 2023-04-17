import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    LocationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
