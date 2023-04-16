import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerSetupPageComponent } from './player-setup-page/player-setup-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'player-setup-page', component: PlayerSetupPageComponent },
  { path: 'main-page', component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
