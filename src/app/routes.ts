import { Routes } from '@angular/router'
import { MemesComponent } from './memes/memes.component'
import { MemeDetailsComponent } from './memes/meme-details/memeDetails'
import { Error404Component } from './errors/error404component'
import { MemeRouteActivator } from './memes/meme-details/memeRouteActivator'

export const AppRoutes:Routes =
[
    {path:`memes/new`, component: MemesComponent},
    {path:`memes`, component: MemesComponent},
    {path:`memes/:id`, component: MemeDetailsComponent, canActivate: [MemeRouteActivator]},
    {path:`404`, component: Error404Component},
    {path:``, redirectTo:`/memes`, pathMatch:`full`}
]