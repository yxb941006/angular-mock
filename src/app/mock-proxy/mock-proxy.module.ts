import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MockProxyComponent } from './mock-proxy.template';

const MockProxyComponents: any = [MockProxyComponent];

@NgModule({
  declarations: MockProxyComponents,
  exports: MockProxyComponents,
  imports: [BrowserModule],
})
export class MockProxyModule {}
