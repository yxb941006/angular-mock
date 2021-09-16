import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { YapiComponent } from "./yapi.template";

const YapiComponents = [YapiComponent];

@NgModule({
  declarations: YapiComponents,
  exports: YapiComponents,
  imports: [BrowserModule]
})
export class YapiModule {}
