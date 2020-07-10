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
      title : "First",
      urlOfImage : "WWW"
    },
    {
      id : 2,
      name : "MemeNr2",
      title : "Second",
      urlOfImage : "WWW"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
