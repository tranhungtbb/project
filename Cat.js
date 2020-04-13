function Cat(){
	this.stomach = [];
}
Cat.prototype.eat = function(mouse) {
	// body...
	this.stomach.push(mouse);
};
