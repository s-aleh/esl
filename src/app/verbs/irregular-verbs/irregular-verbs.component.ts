import { Component, OnInit, ViewChild } from '@angular/core';
import { IrregularVerbsService } from './irregular-verbs.service';
import { MatPaginator, MatTableDataSource, MatSort, MatFormFieldModule, MatFormFieldControl } from '@angular/material';
import { Verbs } from '../verbs.interface';
import { DataSource } from '@angular/cdk/collections';
import { ImplodePipe } from '../../pipes/implode.pipe';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'irregular-verbs',
  templateUrl: './irregular-verbs.component.html',
  styleUrls: ['./irregular-verbs.component.css']
})
export class IrregularVerbsComponent implements OnInit {

  displayedColumns = ['base', 'simple', 'participle'];
  dataSource = new MatTableDataSource<Verbs>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  pageSize: number = 10;
  pageSizeOptions: Array<number> = [5, 10, 20];
  
  constructor(private verbsSrv: IrregularVerbsService, private content: ContentService) {
    this.content['title'] = 'Irregular Verbs';
    this.verbsSrv.loadIrregularVerbs();
    this.verbsSrv.verbs.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

}
