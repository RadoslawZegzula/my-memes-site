import { Component, OnInit } from '@angular/core'
import { MemeService } from './shared/meme.service'

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit 
{

  arrayOfMemes:any[]

  constructor(private memeService:MemeService) { }

  ngOnInit() 
  {
    this.arrayOfMemes = this.memeService.getMemes()
  }

}
