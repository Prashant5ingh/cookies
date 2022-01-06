import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddformComponent } from './addform/addform.component';
import { NewsComponent } from './news/news.component';
import { PutrequestComponent } from './putrequest/putrequest.component';
import { NavMaterialComponent } from './nav-material/nav-material.component';

//import { NewsComponent } from './news/news.component';
const routes: Routes = [{path: 'news', component: NewsComponent},
{path: 'requests', component: PutrequestComponent},{path: 'address-form', component: AddformComponent},{path: 'Nav', component: NavMaterialComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[NewsComponent,PutrequestComponent,AddformComponent,NavMaterialComponent];
