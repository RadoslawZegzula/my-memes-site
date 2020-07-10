import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'meme-member-of-list',
  template: 
  `
  <div>
    <h3 [routerLink]="['/memes', meme.id]">: {{meme.title}}</h3>
    <img [routerLink]="['/memes', meme.id]" src="./assets/img/img1.jpg"/>
    <div>
        <button>Likes</button>
        <button>Update</button>
    </div>
    <button>Show comments</button>
  </div>
  `,
  styles: [``]
})

export class MemeMemberOfList implements OnInit {
  @Input() meme:any

  constructor() { }

  ngOnInit() {
  }

}