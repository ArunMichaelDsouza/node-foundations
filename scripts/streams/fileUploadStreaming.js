// File upload streaming with progress

var http = require('http'),
	fs = require('fs'),
	path = require('path');

var uploadPath = path.join(__dirname, '../../files/uploaded-file.txt');

http.createServer(function(req, res) {
	var fileSize = req.headers['content-length'], // Find size of file being uploaded
		writeStream = fs.createWriteStream(uploadPath), // Create write stream for file to be written to
		uploaded = 0;

	// Pipe request chunk data to write stream
	req.pipe(writeStream);

	// Calculate upload progess on each request data event 
	req.on('data', function(chunk) {
		uploaded += chunk.length;

		var progress = (uploaded / fileSize) * 100;
		res.write(parseInt(progress.toFixed(0), 10) + '% \n');
	});

	req.on('end', function() {
		res.end();
	});
}).listen(8000);

console.log('Server running...');