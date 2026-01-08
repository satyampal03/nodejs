const notes = require('./2_notes');
console.log('this is the server file' );
console.log(notes.x + 20);
// lodash ?
let data = ['sachin',3,4,3,5,2,4,3,43,5,34,5,345,3,54,33,'sachin',3,3,3,,3,5];
var _ = require('lodash');
let x = _.uniq(data);

console.log(x)