import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-tree',
  templateUrl: './cdk-tree.component.html',
  styleUrls: ['./cdk-tree.component.scss']
})
export class CdkTreeComponent implements OnInit {
  @Input() dataSource;

  constructor() { }

  ngOnInit(): void {
  }

}
