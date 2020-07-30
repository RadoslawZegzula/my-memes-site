import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component
({
  templateUrl:'./user-profile.html',
  styles: 
  [`
  em { float:right, color:#E05C65; padding-left:10px; }
  .error input { background-color:#E3C3C3; }
  .error ::-webkit-input-placeholder { color:999; }
  .error ::-moz-placeholder { color:999; }
  .error :-moz-placeholder { color:999; }
  .error :ms-input-placeholder { color:999; }
  `]
})

export class UserProfileComponent implements OnInit
{
  profileForm:FormGroup
  firstName:FormControl
  lastName:FormControl

  constructor(private router:Router, private auth:AuthService)
  {}

  ngOnInit()
  {
    this.firstName = new FormControl(this.auth.currentUser.firstName, Validators.required)
    this.lastName = new FormControl(this.auth.currentUser.firstName, Validators.required)
    this.profileForm = new FormGroup
    ({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  submitProfile(formValues)
  {
    if(this.profileForm.valid == false){ return }
    this.auth.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.router.navigate(['memes'])
  }

  cancel()
  {
    this.router.navigate(['memes'])
  }

  validateFirstName()
  {
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName()
  {
    return this.lastName.valid || this.lastName.untouched
  }

}