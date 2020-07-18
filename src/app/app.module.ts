import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutes } from './routes'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'

import 
{
  MemesComponent,
  MemeMemberOfList,
  MemeCreationComponent,
  MemeService,
  MemesListResolver,
  MemeRouteActivator,
  MemeDetailsComponent
} from './memes/index'

import { NavbarComponent } from './navbar/navbar.component'
import { MyPaginationComponent } from './memes/pagination/pagination.component'
import { Error404Component } from './errors/error404component'
import { ToastrService } from './common/toastrService'


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
    MemesListResolver,
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
