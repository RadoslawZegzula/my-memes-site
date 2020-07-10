import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutes} from './routes'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MemesComponent } from './memes/memes.component';
import { MemeMemberOfList } from './memes/memeMemberOfList';
import { MemeDetailsComponent } from './memes/meme-details/memeDetails';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MemesComponent,
    MemeMemberOfList,
    MemeDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
