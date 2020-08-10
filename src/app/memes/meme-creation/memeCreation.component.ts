import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { MemeService } from '../shared/meme.service'
import { IMeme } from '../shared/meme.model';

@Component
({
  selector: 'meme-details',
  templateUrl: './memeCreation.component.html',
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

export class MemeCreationComponent
{
  newMeme:IMeme
  isDirty:boolean = true

  constructor(private memeService:MemeService, private router:Router) { }

  saveMeme(formValues:IMeme)
  {
    this.memeService.addMeme(formValues)
    this.isDirty = false
    this.router.navigate(['/memes'])
  }

  cancel()
  {
    this.router.navigate(['/memes'])
  }
}