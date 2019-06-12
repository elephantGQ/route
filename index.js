const fs=require('fs')
const path=require('path')
const qs=require('querystring')
const http=require('http')
const content=require('./utils/content')
const mimes=require('./utils/mimes')
const server=http.createServer((req,res)=>{
    const reqUrl=req.url;
    const public =__dirname+'/public'
    //public这块是你的服务的主路径
    const directior=qs.unescape(path.join(public, reqUrl))
    if (/favicon\.ico$/.test(reqUrl)) {
        ;
      } else {
        
        console.log(qs.unescape(reqUrl))
        console.log(directior)
        let cont=content(reqUrl,public)
        let extname=path.extname(directior)
        let mime=mimes[extname] ? mimes[extname]:"text/html";
        console.log(mime)
        // console.log(cont)
        res.setHeader('Content-Type', mime)
        if (/image\//.test(mime)) {
      res.write(cont, 'binary')
    } else {
      res.write(cont)
    }
      }
      res.end()
})
server.listen(8888, () => {
    console.log('localhost:8888')
  })