import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component
({
  templateUrl:'./user-profile.html',
  styles: [``]
})

export class UserProfileComponent implements OnInit
{
  profileForm:FormGroup

  constructor(private router:Router, private auth:AuthService)
  {}

  ngOnInit()
  {
    let firstName = new FormControl(this.auth.currentUser.firstName)
    let lastName = new FormControl(this.auth.currentUser.firstName)
    this.profileForm = new FormGroup
    ({
      firstName: firstName,
      lastName: lastName
    })
  }

  submitProfile(formValues)
  {
    this.auth.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.router.navigate(['memes'])
  }

  cancel()
  {
    this.router.navigate(['memes'])
  }
}