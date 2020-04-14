var Mouse = require('./Mouse');

function Cat(){
	this.stomach = [];
}
Cat.prototype.eat = function(animal) {
	// body...
	if(animal instanceof Mouse){
		this.stomach.push(animal);
	}else{
		throw new Error('Cat can only eat Mouse!');
	}
};
module.exports = Cat;