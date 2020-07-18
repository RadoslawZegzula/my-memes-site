import { Routes } from '@angular/router'
import { Error404Component } from './errors/error404component'

import 
{
  MemesComponent,
  MemeCreationComponent,
  MemesListResolver,
  MemeRouteActivator,
  MemeDetailsComponent
} from './memes/index'

export const AppRoutes:Routes =
[
    {path:`memes/new`, component: MemeCreationComponent, canDeactivate:['canDeactivateCreateMeme']},
    {path:`memes`, component: MemesComponent, resolve: {memes:MemesListResolver} },
    {path:`memes/:id`, component: MemeDetailsComponent, canActivate: [MemeRouteActivator]},
    {path:`404`, component: Error404Component},
    {path:``, redirectTo:`/memes`, pathMatch:`full`},
    {path:`user`, loadChildren:'./user/user.module#UserModule'}
]