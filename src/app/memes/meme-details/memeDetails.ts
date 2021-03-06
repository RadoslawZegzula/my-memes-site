import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MemeService } from '../shared/meme.service'
import { IMeme } from '../shared';

@Component({
  selector: 'meme-details',
  template: 
  `
  <div>
    This is id {{meme.id}} of meme
  </div>
  `,
  styles: [``]
})

export class MemeDetailsComponent implements OnInit 
{
  meme:IMeme

  constructor(private memeService:MemeService, private route:ActivatedRoute) { }

  ngOnInit() 
  {
    this.meme = this.memeService.getMeme(this.route.snapshot.params['id']);
  }

}