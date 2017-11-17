var bands = require("./bands.js");

console.log(bands)

/* for (x in bands) { console.log(bands[x])
	text = bands[x] + " ";
}
*/

for (var key in bands) {
	console.log (" A  " + key + " band is " + bands[key] + " . ")
}