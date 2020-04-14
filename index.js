var Mouse = require('./Mouse');
var Dog = require('./Dog');
var Cat = require('./Cat');

var cat = new Cat();
var mouse = new Mouse();
cat.eat(mouse);
console.log(cat);