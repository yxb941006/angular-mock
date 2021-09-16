import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThyLoadingModule } from 'ngx-tethys';
import { MockjsJsonComponent } from './mock-json/mockjs-json.template';
import { MockjsMockComponent } from './mock/mockjs-mock.template';
import { MockjsSetupComponent } from './setup/mockjs-setup.template';

const MockJsComponents = [MockjsMockComponent, MockjsSetupComponent, MockjsJsonComponent];

@NgModule({
  declarations: MockJsComponents,
  exports: MockJsComponents,
  imports: [BrowserModule, ThyLoadingModule]
})
export class MockjsModule {}
