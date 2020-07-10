import { Component, OnInit,Input} from '@angular/core';
import { ToastrService } from 'src/app/common/toastrService';

@Component({
  selector: 'meme-member-of-list',
  template: 
  `
  <div>
    <h3 [routerLink]="['/memes', meme.id]">: {{meme.title}}</h3>
    <img [routerLink]="['/memes', meme.id]" src="./assets/img/img1.jpg"/>
    <div>
        <button (click)="handleClickedLike()">Like</button>
        <button (click)="handleClickedShare()">Share</button>
        <button (click)="handleClickedDownload()">Download</button>
    </div>
    <button>Show comments</button>
  </div>
  `,
  styles: [``]
})

export class MemeMemberOfList implements OnInit {
  @Input() meme:any

  constructor(private toastr:ToastrService) { }

  ngOnInit() {}

  handleClickedLike()
  {
    this.toastr.success("You clicked like")
  }

  handleClickedShare()
  {
    this.toastr.success("You clicked share")
  }

  handleClickedDownload()
  {
    this.toastr.success("You clicked download")
  }

}