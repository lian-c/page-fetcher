const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2); //skips the first two
const URL = args[0] // first the first array not in array form
const path = args[1] //the local path it should be downloading the site to

//expected output console.log(`Downloaded and saved number bytes to ${path}`)

request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  
  fs.writeFile(path, body, err => { //write file to the new path similar to the requestExample
    if (err) {
      console.error(err);
    }
  })
  console.log(`Downloaded and saved ${readFileSize(body)} bytes to ${path}`)
});

const readFileSize = function (file){
  return file.length
}