import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ThyButtonModule } from 'ngx-tethys/button';
import { AppComponent } from './app.component';
import { ThyDividerModule } from 'ngx-tethys/divider';
import { MockjsModule } from './mockjs/mockjs.module';
import { YapiModule } from './yapi/yapi.module';
import { MockProxyModule } from './mock-proxy/mock-proxy.module';
import { ApifoxModule } from './apifox/apifox.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MockjsModule,
    YapiModule,
    ThyButtonModule,
    ThyDividerModule,
    MockProxyModule,
    ApifoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
