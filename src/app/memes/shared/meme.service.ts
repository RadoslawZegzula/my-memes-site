import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import { IMeme } from './meme.model';

@Injectable()
export class MemeService
{
    addMeme(arg0:IMeme) 
    {
      arrayOfMemes.push(arg0);
    }

    getMeme(id: number):IMeme
    {
      return arrayOfMemes.find(m => m.id == id)
    }

    getMemes():Observable<IMeme[]>
    {
      let subject  = new Subject<IMeme[]>()
      setTimeout(()=>{ subject.next(arrayOfMemes); subject.complete() }, 200)
      
      return subject;
    }

}

const arrayOfMemes:IMeme[] = 
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
    {
      id : 4,
      name : "MemeNr1",
      title : "First",
      urlOfImage : "WWW"
    },
    {
      id : 5,
      name : "MemeNr2",
      title : "Second",
      urlOfImage : "WWW"
    },
    {
      id : 6,
      name : "MemeNr3",
      title : "th",
      urlOfImage : "WWW"
    },
    {
      id : 7,
      name : "MemeNr1",
      title : "First",
      urlOfImage : "WWW"
    },
    {
      id : 8,
      name : "MemeNr2",
      title : "Second",
      urlOfImage : "WWW"
    },
    {
      id : 9,
      name : "MemeNr3",
      title : "th",
      urlOfImage : "WWW"
    },
    {
      id : 10,
      name : "MemeNr1",
      title : "First",
      urlOfImage : "WWW"
    },
    {
      id : 11,
      name : "MemeNr2",
      title : "Second",
      urlOfImage : "WWW"
    }
  ]