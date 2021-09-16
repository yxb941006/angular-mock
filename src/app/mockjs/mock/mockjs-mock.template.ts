import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import * as Mock from 'mockjs';

@Component({
  templateUrl: './mockjs-mock.template.html',
  selector: 'mock-js-mock',
})
export class MockjsMockComponent implements OnInit {
  getRes: any;
  postRes: any;
  postBodyRes: any;

  constructor(private http: HttpClient) {
    Mock.mock('/typhon/get', 'get', {
      name: [1, 2, 3, 4, 5],
    });
    Mock.mock('/typhon/post', 'post', {
      post: true,
    });
    Mock.mock('/typhon/post-body', 'post', (options: any) => {
      console.log(options, 'options');
      return {
        'post-options': true,
      };
    });
  }

  ngOnInit() {
    this.http.get('/typhon/get').subscribe((data) => {
      this.getRes = data;
    });
    this.http.post('/typhon/post', {}).subscribe((data) => {
      this.postRes = data;
    });
    this.http
      .post('/typhon/post-body', {
        'post-body': 1,
      })
      .subscribe((data) => {
        this.postBodyRes = data;
      });
  }
}
