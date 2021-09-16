import { Component, OnInit } from '@angular/core';
import * as Mock from 'mockjs';

@Component({
  selector: 'mockjs-json',
  template: `
    <h3>mock-js-json</h3>
    <h5>String</h5>
    <div>{{ strMock | json }}</div>
    <h5>Number</h5>
    <div>{{ numMock | json }}</div>
    <h5>Boolean</h5>
    <div>{{ booleanMock | json }}</div>
    <h5>Object</h5>
    <div>{{ objectMock | json }}</div>
    <h5>Array</h5>
    <div>{{ arrayMock | json }}</div>
    <h5>Regex</h5>
    <div>{{ regMock | json }}</div>
  `,
})
export class MockjsJsonComponent implements OnInit {
  strMock: any;

  numMock: any;

  booleanMock: any;

  objectMock: any;

  arrayMock: any;

  regMock: any;

  ngOnInit() {
    this.strMock = Mock.mock({
      'string|1-10': '★',
    });

    this.numMock = Mock.mock({
      'number|123.10': 1.123,
    });

    this.booleanMock = Mock.mock({
      'boolean|1': true,
    });

    this.objectMock = Mock.mock({
      'object|2-4': {
        '110000': '北京市',
        '120000': '天津市',
        '130000': '河北省',
        '140000': '山西省',
      },
    });

    this.arrayMock = Mock.mock({
      'array|1-10': [
        {
          'name|+1': ['Hello', 'Mock.js', '!'],
        },
      ],
    });

    this.regMock = Mock.mock({
      regexp: /\w\W\s\S\d\D/,
    });
  }
}
