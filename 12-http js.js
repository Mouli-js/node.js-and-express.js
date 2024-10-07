const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our Homepage');
    } else if (req.url === '/about') {
        res.end('end of about');
    } else {
        res.end(`<h1>Oops</h1>
            <p>We can't find the page that you are looking for</p>
            <a href="/">back home</a>`);
    }
});

server.listen(5000)