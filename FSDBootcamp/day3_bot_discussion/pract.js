import moment from 'moment';

const start = moment().startOf('day').add(8*60*60*1000, 'ms');
console.log(start);
const end = moment(start).add(10*60*60*1000, 'ms');
console.log(end);