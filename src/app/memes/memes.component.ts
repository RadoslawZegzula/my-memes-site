import { Component, OnInit } from '@angular/core'
import { MemeService } from './shared/meme.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit 
{
  items:any;
  pageOfItems: Array<any>;

  constructor(private memeService:MemeService, private route:ActivatedRoute ) 
  { 

  }

  ngOnInit() 
  {
    this.items = this.route.snapshot.data['memes']   
  }
  
  onChangePage(pageOfItems: Array<any>) 
  {
    this.pageOfItems = pageOfItems;
  }

}
