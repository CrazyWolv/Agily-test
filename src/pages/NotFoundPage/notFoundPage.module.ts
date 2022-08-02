import { NgModule } from '@angular/core';

import { NotFoundPageComponent } from './notFoundPage';
import { ComponentsModules } from 'src/modules/components.module';

@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    ComponentsModules
  ],
  providers: [],
  bootstrap: [NotFoundPageComponent]
})
export class NotFoundPageModule { }
