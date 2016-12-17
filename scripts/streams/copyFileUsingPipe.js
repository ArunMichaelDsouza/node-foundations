// Copy file contents using pipe

var fs = require('fs'),
	path = require('path');

var file1 = path.join(__dirname, '../../files/file.txt'),
	file2 = path.join(__dirname, '../../files/copied-file.txt');

// Create read and write streams
var readStream = fs.createReadStream(file1), 
	writeStream = fs.createWriteStream(file2);

// Pipe contents from read to write stream
readStream.pipe(writeStream);