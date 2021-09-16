import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApifoxComponent } from './apifox.template';

const ApifoxComponents: any = [ApifoxComponent];

@NgModule({
  declarations: ApifoxComponents,
  exports: ApifoxComponents,
  imports: [BrowserModule],
})
export class ApifoxModule {}
