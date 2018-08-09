export class PaginationListing {
  offset: number;
  count: number;
  rows: any[];
  pageLimit: number;

  constructor(pageLimit: number) {
    this.pageLimit = pageLimit;
  }

  clear() {
    this.offset = 0;
    this.count = 0;
    this.rows = [];
  }

  get indicatorIndex(): number {
    return (this.rows.length > 0) ?
      ((this.pageNum - 1) * this.pageLimit + 1) :
      0
      ;
  }

  get indicatorCount(): number {
    return (this.rows.length > 0) ?
      ((this.pageNum - 1) * this.pageLimit + this.rows.length) :
      0
      ;
  }

  get numPages(): number {
    return Math.ceil(this.count / this.pageLimit);
  }

  get pageNum(): number {
    return Math.floor(this.offset / this.pageLimit) + 1;
  }

  get pageNumbers() {
    let list: number[] = [];
    if (this.numPages) {
      for (let ii = 1; ii <= this.numPages; ii++) {
        list.push(ii);
      }
    }

    return list;
  }
}

export class PaginationParameters {
  page: number;
  pageLimit: number;
  sortField: string;
  sortDirection: 'asc' | 'desc';

  errors: any;

  constructor(defaultField: string, pageLimit: number) {
    this.errors = {};
    this.page = 1;
    this.pageLimit = pageLimit;
    this.sortField = defaultField;
    this.sortDirection = 'asc';
  }

  sortBy(field: string) {
    if (this.sortField === field) {
      this.toggleSortDirection();
    } else {
      this.sortDirection = 'asc';
      this.sortField = field;
    }
  }

  toggleSortDirection() {
    if (this.sortDirection === 'asc') {
      this.sortDirection = 'desc';
    } else {
      this.sortDirection = 'asc';
    }
  }
}
