// Read file synchronous implementation

var fs = require('fs'),
	path = require('path');

var filePath = path.join(__dirname, '../files/file.txt'); // Required as relative paths wont work

/* Alternate method to find file path 

	var filePath = process.cwd() + '/files/file.txt'; 

	process.cwd() gives root path to current working directory
*/

var contentsSync = fs.readFileSync(filePath, 'UTF-8'); // Provide encoding param for proper content rendering
console.log('Synchronous request result -');
console.log(contentsSync); // Or use toString() for proper content rendering



// Read file asynchronous implementation

fs.readFile(filePath, 'UTF-8', function(err, contents) {
	console.log('\nAsynchronous request result -')
	console.log(contents);
});