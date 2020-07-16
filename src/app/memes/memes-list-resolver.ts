import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { MemeService } from './shared/meme.service'
import { map } from 'rxjs/operators'

@Injectable()
export class MemesListResolver implements Resolve<any>
{
    constructor(private memeService:MemeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.memeService.getMemes().pipe(map(memes=>memes))
    }

}