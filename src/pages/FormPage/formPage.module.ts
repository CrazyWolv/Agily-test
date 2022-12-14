import { NgModule } from '@angular/core';

import { FormPageComponent } from './formPage';
import { ComponentsModules } from 'src/modules/components.module';

@NgModule({
  declarations: [
    FormPageComponent
  ],
  imports: [
    ComponentsModules
  ],
  providers: [],
  bootstrap: [FormPageComponent]
})
export class FormPageModule { }
