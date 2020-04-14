function Mouse(name){
	this.stomach = [];
	this.name = name;	
}
Mouse.prototype.Eat = function(foodname) {
	// body...
	this.stomach.push(foodname);
};
module.exports = Mouse;