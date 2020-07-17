import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { UserRoutes } from './user.routes'
import { UserProfileComponent } from './user-profile.component'

@NgModule(
    {
    declarations: 
    [
        UserProfileComponent

    ],
    imports: 
    [
        CommonModule,
        RouterModule.forChild(UserRoutes)

    ],
    providers: 
    [

    ],
  })
  export class UserModule { }