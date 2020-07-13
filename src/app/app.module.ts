import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutes } from './routes'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { NavbarComponent } from './navbar/navbar.component'
import { MemesComponent } from './memes/memes.component'
import { MemeMemberOfList } from './memes/member-of-memes-list/memeMemberOfList'
import { MemeDetailsComponent } from './memes/meme-details/memeDetails'
import { MyPaginationComponent } from './memes/pagination/pagination.component'
import { Error404Component } from './errors/error404component'

import { MemeService } from './memes/shared/meme.service'
import { ToastrService } from './common/toastrService'
import { MemeRouteActivator } from './memes/meme-details/memeRouteActivator'

@NgModule(
  {
  declarations: 
  [
    AppComponent,
    NavbarComponent,
    MemesComponent,
    MemeMemberOfList,
    MemeDetailsComponent,
    MyPaginationComponent,
    Error404Component
  ],
  imports: 
  [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [MemeService, ToastrService, MemeRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
