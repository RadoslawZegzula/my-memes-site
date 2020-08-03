import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { MemeService } from '../shared/meme.service'

@Component
({
  selector: 'meme-details',
  template: 
  `
  <div>
    <h2>Here you can add meme</h2>
    Name:
    <div>
      <button class="btn btn-primary" (click)="addMeme()">Add</button>
      <button class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
  </div>
  `,
  styles: [``]
})

export class MemeCreationComponent
{
  isDirty:boolean = true;

  constructor(private memeService:MemeService, private router:Router) { }

  addMeme()
  {
    this.memeService.addMeme
    ({
      id : 155,
      name : "Created meme",
      title : "CreatedMeme",
      urlOfImage : "WWW"
    });
  }

  cancel()
  {
    this.router.navigate(['/memes'])
  }
}