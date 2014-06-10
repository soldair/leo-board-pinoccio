var test = require('tape');
var board = require('../');

test("can load pinoccio board",function(t){
  var b = board['pinoccio'];

  t.ok(b,'should export a board');
  t.equals(b.name,'Pinoccio Scout','should have correct name');
  t.end();

})
