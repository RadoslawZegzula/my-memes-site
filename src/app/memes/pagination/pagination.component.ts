import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IMeme } from '../shared/meme.model';

import paginate = require('jw-paginate');

@Component
({
  selector: 'my-pagination',
  template: `<ul *ngIf="pager.pages && pager.pages.length" class="pagination">
  <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item first-item">
      <a (click)="setPage(1)" class="page-link">First</a>
  </li>
  <li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item previous-item">
      <a (click)="setPage(pager.currentPage - 1)" class="page-link">Previous</a>
  </li>
  <li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}" class="page-item number-item">
      <a (click)="setPage(page)" class="page-link">{{page}}</a>
  </li>
  <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item next-item">
      <a (click)="setPage(pager.currentPage + 1)" class="page-link">Next</a>
  </li>
  <li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item last-item">
      <a (click)="setPage(pager.totalPages)" class="page-link">Last</a>
  </li>
</ul>`
})

export class MyPaginationComponent implements OnInit, OnChanges 
{
  @Input() items: IMeme[];
  @Output() changePage = new EventEmitter<any>(true);
  @Input() initialPage = 1;
  @Input() pageSize = 3;
  @Input() maxPages = 10;

  pager: any = {};

  ngOnInit() 
  {
    if (this.items && this.items.length) {
      this.setPage(this.initialPage);
    }
  }

  ngOnChanges(changes: SimpleChanges) 
  {
    if (changes.items.currentValue !== changes.items.previousValue) {
      this.setPage(this.initialPage);
    }
  }

  private setPage(page: number) {
    this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages);

    var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);

    this.changePage.emit(pageOfItems);
  }
}