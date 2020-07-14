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
import { MemeCreationComponent } from './memes/meme-adding-page/memeCreation.component'

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
    Error404Component,
    MemeCreationComponent
  ],
  imports: 
  [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: 
  [
    MemeService, 
    ToastrService, 
    MemeRouteActivator,
    {provide:'canDeactivateCreateMeme', useValue:checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:MemeCreationComponent)
{
  if(component.isDirty)
  {
    return window.confirm('You have not saved this meme, do you want to cancel?')
  }
  return true;
}
