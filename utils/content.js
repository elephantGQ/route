const fs = require('fs')
const qs=require('querystring')
const path = require('path')
const file = require('./file')
const dir = require('./dir')
function content(reqUrl,public){
    const resovledPath = qs.unescape(path.join(public, reqUrl))
    let isExist=fs.existsSync(resovledPath);
    if(!isExist){
        
        return resovledPath+"这个文件不存在"
    }else{
        //判断他是路径还是文件
        let stat=fs.statSync(resovledPath);
        
        //路径就列出所有文件
        if(stat.isDirectory()){
            console.log('这是个文件夹')
            return dir(reqUrl,resovledPath);
        }else{
        //如果是文件的话就显示这个文件
        console.log('这是个文件')
        return file(resovledPath)
    }
    }
     
}
module.exports=content