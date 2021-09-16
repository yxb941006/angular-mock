import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-apifox',
  template: `
  <h3>apifox</h3>
  <div>{{ response | json }}</div>
  `
})
export class ApifoxComponent implements OnInit {
  response: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`http://127.0.0.1:4523/mock/420060/api/typhon/recommend/promoter/find-by-auth-token`).subscribe(data => {
      this.response = data;
    })
  }
}
