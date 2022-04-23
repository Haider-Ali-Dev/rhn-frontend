import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { AlertComponent } from './alert/alert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LinkComponent } from './link/link.component';
import { FooterItemComponent } from './footer-item/footer-item.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { ToolboxItemComponent } from './toolbox-item/toolbox-item.component';


@NgModule({
  declarations: [
    InputComponent,
    AlertComponent,
    LinkComponent,
    FooterItemComponent,
    ToolboxComponent,
    ToolboxItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    AlertComponent,
    FooterItemComponent,
    ToolboxComponent
  ]
})
export class SharedModule { }
