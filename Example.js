// Node.js program to demonstrate the
// fs.writeFile() method

// Import the filesystem module
const fs = require('fs');

let data = "This is a file containing a collection of books.";

fs.writeFile("books.txt", data, (err) => {
if (err)
	console.log(err);
else {
	console.log("File written successfully\n");
	console.log("The written has the following contents:");
	console.log(fs.readFileSync("books.txt", "utf8"));
}
});

// Node.js program to demonstrate
// the fs.readFile() method

// Include fs module


// Use fs.readFile() method to read the file
fs.readFile('books.txt', 'utf8', function(err, data){
	
	// Display the file content
	console.log(data);
});

console.log('readFile called');

const exists = async (path) => {
	return await new Promise((resolve) => {
		resolve(fs.existsSync(path));
	});
};
// If you have a file name samples on same root it will result true.
exists('books.txt').then(res => console.log(res))
console.log(`I'm not blocked as I'll show up on first`)