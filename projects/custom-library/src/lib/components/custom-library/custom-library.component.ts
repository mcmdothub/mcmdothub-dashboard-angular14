import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'lib-custom-library',
  templateUrl: './custom-library.component.html',
  styleUrls: ['./custom-library.component.scss'],
})
export class CustomLibraryComponent implements OnInit, OnChanges {
  @Input('cols') columnList: string[];
  @Input('rows') rowList: any[];

  mtDataSource: MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {
    this.columnList = [];
    this.rowList = [];
    this.mtDataSource = new MatTableDataSource();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rowList']?.currentValue.length) {
      this.mtDataSource = new MatTableDataSource(this.rowList);
      this.mtDataSource.sort = this.sort;
      this.mtDataSource.paginator = this.paginator;
    }
  }

  sortColumn(sort: Sort) {
    if(sort.direction) {
      this.mtDataSource.sort = this.sort;
    }
  }

  ngOnInit(): void {}
}
