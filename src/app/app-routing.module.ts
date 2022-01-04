import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { PutrequestComponent } from './putrequest/putrequest.component';

//import { NewsComponent } from './news/news.component';
const routes: Routes = [{path: 'news', component: NewsComponent},
{path: 'requests', component: PutrequestComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[NewsComponent,PutrequestComponent];
