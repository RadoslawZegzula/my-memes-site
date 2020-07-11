import { Component, OnInit } from '@angular/core'
import { MemeService } from './shared/meme.service'

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit 
{
  items = [];
  pageOfItems: Array<any>;

  constructor(private memeService:MemeService) { }

  ngOnInit() 
  {
    this.items = this.memeService.getMemes()
  }
  
  onChangePage(pageOfItems: Array<any>) 
  {
    this.pageOfItems = pageOfItems;
  }

}
