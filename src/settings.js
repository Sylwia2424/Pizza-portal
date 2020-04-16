export const api = {
  url: '//' + window.location.hostname + (window.location.hostname==='localhost' ? ':3131' : ''),
  tables: 'api/tables',
  products: 'api/products',
  order: 'api/order',
  booking: 'api/booking',
  event: 'api/event',
  dateStartParamKey: 'api/date_gte',
  dateEndParamKey: 'api/date_lte',
  notRepeatParam: 'api/repeat=false',
  repeatParam: 'api/repeat_ne=false',
};