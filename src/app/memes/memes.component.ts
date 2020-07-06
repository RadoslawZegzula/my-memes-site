import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.css']
})
export class MemesComponent implements OnInit {
  arrayOfMemes = 
  [
    {
      id : 1,
      name : "MemeNr1",
      urlOfImage : "WWW"
    },
    {
      id : 2,
      name : "MemeNr2",
      urlOfImage : "WWW"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
