import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const YAPI_PREFIX = 'http://yapi.smart-xwork.cn/mock/90787';

const LOCAL_YAPI = 'http://127.0.0.1:3000/mock/9/api'

@Component({
  selector: 'app-yapi',
  template: `
    <h3>yapi</h3>
    <div>{{ getRes | json }}</div>
    <div style="margin-bottom: 10px;">{{ postRes | json }}</div>
    <h5>local yapi</h5>
    <div>{{ localGetRes | json }}</div>
  `,
})
export class YapiComponent implements OnInit {
  getRes: any;

  postRes: any;

  localGetRes: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`${YAPI_PREFIX}/typhon/yapi-get`).subscribe((data) => {
      this.getRes = data;
    });

    this.http.post(`${YAPI_PREFIX}/typhon/yapi-post`, {
      'post-body': 1234125125
    }).subscribe(data => {
      this.postRes = data;
    });

    this.http.get(`${LOCAL_YAPI}/typhon/yapi-get`).subscribe(data => {
      this.localGetRes = data;
    })
  }
}
