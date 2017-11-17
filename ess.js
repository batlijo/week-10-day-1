var essentials = {
	drink: "water",
	eat: "snickers",
	fun: "phone",
	friend: "facebook"
}

var nonessentials= {
	cookware: "wafflemaker"
};

var nicetohaves = {
	tools: "wine opener"

}

/* 	this makes it public to other files...it's to avoid polluting your global scope
 	ie, having variables with same names in different files you're code
 	would be overwritten. this helps to avoid that
*/
module.exports = {
	essentials: essentials,
	nicetohaves: nicetohaves
}