import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cdk-tree8',
  templateUrl: './cdk-tree8.component.html',
  styleUrls: ['./cdk-tree8.component.scss']
})
export class CdkTree8Component implements OnInit {

  @Input() dataSource;

  constructor() { }

  ngOnInit(): void {
  }

}
