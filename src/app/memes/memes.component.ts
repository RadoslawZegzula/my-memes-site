import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { IMeme } from './shared/meme.model';

@Component
({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit 
{
  items:IMeme[];
  pageOfItems:IMeme[];

  constructor(private route:ActivatedRoute ) 
  { 

  }

  ngOnInit() 
  {
    this.items = this.route.snapshot.data['memes']   
  }
  
  onChangePage(pageOfItems: IMeme[]) 
  {
    this.pageOfItems = pageOfItems;
  }

}
