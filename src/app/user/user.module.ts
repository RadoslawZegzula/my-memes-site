import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

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
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(UserRoutes)
    ],
    providers: 
    [
    ],
  })
  export class UserModule { }