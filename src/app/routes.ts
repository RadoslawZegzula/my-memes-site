import { Routes } from '@angular/router'
import {MemesComponent} from './memes/memes.component'
import {MemeDetailsComponent} from './memes/meme-details/memeDetails'

export const AppRoutes:Routes =
[
    {path:`memes`, component: MemesComponent},
    {path:`memes/:id`, component: MemeDetailsComponent},
    {path:``, redirectTo:`/memes`, pathMatch:`full`}
]