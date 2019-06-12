const fs = require('fs')
const path = require('path')
function dir(reqUrl,resovledPath){
    let dirs=fs.readdirSync(resovledPath);
    let str='<meta charset="UTF-8"><ul>'
     dirs.forEach((ele)=>{
        let href = `${reqUrl === '/' ? '' : reqUrl}/${ele}`
         str+=`<li>${fs.statSync(resovledPath+'/'+ele).isDirectory()?"[DIR]":"[FILE]"}<a href="${href}">${ele}</a></li>`
     });
    str+="</ul>"
    return str;
}
module.exports=dir