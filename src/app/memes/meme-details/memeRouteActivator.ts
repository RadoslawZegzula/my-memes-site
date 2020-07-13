
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { MemeService } from '../shared/meme.service'


@Injectable()
export class MemeRouteActivator implements CanActivate 
{
    constructor(private memesService:MemeService, private router:Router)
    {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> 
    {
        const memeExist = !!this.memesService.getMeme(+route.params['id'])

        if(memeExist == false)
        {
            this.router.navigate(['/404'])
        }

        return memeExist;
    }

}