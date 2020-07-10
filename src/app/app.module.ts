import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutes} from './routes';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MemesComponent } from './memes/memes.component';
import { MemeMemberOfList } from './memes/member-of-memes-list/memeMemberOfList';
import { MemeDetailsComponent } from './memes/meme-details/memeDetails';

import { MemeService } from './memes/shared/meme.service';
import { ToastrService } from './common/toastrService'

@NgModule(
  {
  declarations: 
  [
    AppComponent,
    NavbarComponent,
    MemesComponent,
    MemeMemberOfList,
    MemeDetailsComponent
  ],
  imports: 
  [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [MemeService, ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
