import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'one-meme',
  template: 
  `
  <div>
    <img src="./assets/img/img1.jpg"/>
    <div>
        <button>Likes</button>
        <button>Update</button>
    </div>
    <button>Show comments</button>
  </div>
  `,
  styles: [``]
})

export class OneMeme implements OnInit {
  @Input() oneMeme:any

  constructor() { }

  ngOnInit() {
  }

}