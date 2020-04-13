function Dog(){
	this.stomach = [];
}
Dog.prototype.Eat = function(cat) {
	// body...
	this.stomach.push(cat);
};