const http = require('http')

const server = http.createServer((req,res)=>{
 if(req.url === '/'){
  res.end('Meri Jaan Kesi ho')
 }
 if(req.url ==='/about'){
  res.end('Ye hai meri Adhuri Kahani')
 }

 res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
  `)
})

server.listen(4000)