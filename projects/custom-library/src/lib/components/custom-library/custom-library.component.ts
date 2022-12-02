import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-custom-library',
  templateUrl: './custom-library.component.html',
  styleUrls: ['./custom-library.component.scss'],
})
export class CustomLibraryComponent implements OnInit, OnChanges {
  @Input('cols') columnList: string[];
  @Input('rows') rowList: any[];

  constructor() {
    this.columnList = [];
    this.rowList = [];
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {}
}
