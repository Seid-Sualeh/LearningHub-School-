
const http = require('http'); 
const server = http.createServer((req, res) => { 
console.log(`Request URL: ${req.url}`); 
console.log(`Request Method: ${req.method}`); 
res.writeHead(200, { 'Content-Type': 'text/plain' }); 
res.end('Request received'); 
}); 
server.listen(3000, () => { 
console.log('Server is running on http://localhost:3000'); 
});
 