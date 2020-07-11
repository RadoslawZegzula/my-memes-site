import { Component, OnInit,Input} from '@angular/core';
import { ToastrService } from 'src/app/common/toastrService';

@Component({
  selector: 'meme-member-of-list',
  template: 
  `
  <div class="well hoverwell thumbnail">
    <h3 [routerLink]="['/memes', meme.id]">: {{meme.title}}</h3>
    <img [routerLink]="['/memes', meme.id]" src="./assets/img/img2.jpg"/>
    <div>
        <button class="btn btn-default" (click)="handleClickedLike()">
        Likes: <span class="badge">9</span>
        </button>
        <button class="btn btn-default" (click)="handleClickedShare()">Share</button>
        <button class="btn btn-default" (click)="handleClickedDownload()">Download</button>
    </div>
    <button class="btn btn-default">
    Show comments <span class="badge">67</span>
    </button>
  </div>
  `,
  styles: 
  [`
    .thumbnail { min-height: 250px;margin-left:30%;margin-right: 30%;}
  `]
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