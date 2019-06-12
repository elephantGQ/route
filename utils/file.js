const fs = require('fs')
const qs=require('querystring')
// const fsPromise = fs.promises

module.exports = function(resolvedPath) {
    //fs.readFileSync
  return fs.readFileSync(resolvedPath)  //这样写的话可以转换图片格式
}