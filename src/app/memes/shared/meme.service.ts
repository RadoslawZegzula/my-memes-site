import { Injectable } from '@angular/core'

@Injectable()
export class MemeService
{
    getMemes()
    {
        return arrayOfMemes;
    }

}

const arrayOfMemes = 
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
    {
      id : 3,
      name : "MemeNr3",
      title : "th",
      urlOfImage : "WWW"
    },
  ]