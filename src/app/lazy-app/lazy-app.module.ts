import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyAppRoutingModule } from './lazy-app-routing.module';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  
  imports: [
    CommonModule,
    LazyAppRoutingModule
  ],
  declarations: [LoadingComponent]
})
export class LazyAppModule { }
