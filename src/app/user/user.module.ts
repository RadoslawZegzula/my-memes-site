import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { UserRoutes } from './user.routes'
import { UserProfileComponent } from './user-profile.component'
import { LoginComponent } from './login.component'

@NgModule(
    {
    declarations: 
    [
        UserProfileComponent,
        LoginComponent
    ],
    imports: 
    [
        CommonModule,
        RouterModule.forChild(UserRoutes),
        FormsModule
    ],
    providers: 
    [
    ],
  })
  export class UserModule { }