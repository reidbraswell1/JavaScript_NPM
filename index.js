console.log("---Begin start.js---");
let dayjs = require('dayjs');
dayjs('2018-08-08'); // parse

let myDate = dayjs().format('YYYY-MM-DDTHH:mm:ss A'); // display
console.log(`The Current Date is ${myDate}`);

let http = require('http');
let fs = require('fs');
function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}
http.createServer(onRequest).listen(5000);