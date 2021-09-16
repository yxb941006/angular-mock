import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Mock from 'mockjs';

@Component({
  selector: 'mock-js-setup',
  template: `
    <h3>mock.js-setup</h3>
    <thy-loading [thyDone]="loadingDone"></thy-loading>
    <div *ngIf="loadingDone">{{ response | json }}</div>
  `,
})
export class MockjsSetupComponent implements OnInit {
  loadingDone = false;
  response: any;

  constructor(private http: HttpClient) {
    // setup为设置全局
    /* Mock.setup({
      timeout: 4000,
    }); */
    Mock.mock('/typhon/get-setup', 'get', {
      'setup-res': '@FIRST',
    });
  }

  ngOnInit() {
    this.http.get('/typhon/get-setup').subscribe((data) => {
      this.loadingDone = true;
      this.response = data;
    });
  }
}
