import fs from 'fs';
import http from 'http'

const server = http.createServer((req, res) => {
    console.log(req.url);
    // res.writeHead(200, { 'Content-Type': 'text/html' })
    // res.write(`<h1>Hola Mundo, Pagina ${req.url}</h1>`)
    // res.end()

    if(req.url === '/') {
        const htmlFile = fs.readFileSync('./public/index.html')
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(htmlFile)
        return 
    }

    // const data = { name: 'Jhon doe', age: 30, city: 'New York'}
    // res.writeHead(200, { 'Content-Type': 'application/json' })
    // res.end(JSON.stringify(data))
    
})

server.listen(8080, () => {
    console.log('Server running on port 8080');
})