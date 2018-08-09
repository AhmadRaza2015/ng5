
import { PaginationListing, PaginationParameters } from '../../../shared/ui/models/pagination.model';

export class CollectionListing extends PaginationListing {
  rows: CollectionRow[];
}

export class CollectionRow {
  title: string;
  description: string;
}

export class CollectionSearchParameters extends PaginationParameters {
  title: string;
  errors: any;
}

export function makeCollectionListing(data: CollectionListingData): CollectionListing {
  let listing = new CollectionListing(20);
  console.log(data);
  listing.rows = data.rows.map(d => {
    let row = new CollectionRow();
    row.title = d.title;
    row.description = d.description;
    return row;
  });
  listing.count = data.count;
  listing.offset = data.offset;
  return listing;
}

interface CollectionListingData {
  rows: {
    title: string;
    description: string;
  }[];
  offset: number;
  count: number;
}

export function makeCollectionSearchParametersData(params: CollectionSearchParameters) {
  function formatDate(date: Date | null): string {
    if (date == null) {
      return;
    }

    let m: string | number = date.getUTCMonth() + 1;
    let d: string | number = date.getUTCDate();
    let y = date.getUTCFullYear();
    m = m >= 10 ? m : '0' + m;
    d = d >= 10 ? d : '0' + d;
    return [m, d, y].join('/');
  }
  return {
    // formNumber: params.formNumber ? params.formNumber : '',
    // customer: params.customer ? params.customer.id : '',
    // paymentDateFrom: params.paymentDateFrom ? formatDate(params.paymentDateFrom) : '',
    // paymentDateTo: params.paymentDateTo ? formatDate(params.paymentDateTo) : '',
    page: params.page,
    pageLimit: params.pageLimit,
    sort: params.sortField,
    direction: params.sortDirection,
  };
}
