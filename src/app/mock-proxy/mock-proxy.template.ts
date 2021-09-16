import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mock-proxy',
  template: `
    <h3>mock-proxy</h3>
    <div>{{ response | json }}</div>
  `,
})
export class MockProxyComponent implements OnInit {
  response: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`/mock/typhon`).subscribe((data) => {
      this.response = data;
    });
  }
}
