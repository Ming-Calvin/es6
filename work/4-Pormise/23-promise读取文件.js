// 1. 引入 fs 模块
const fs = require('fs')

// 2. 调用方法读取文件
// fs.readFile('23-text.md', (err, data) => {
//    // 如果失败，则抛出异常
//   if(err) throw err
//   // 如果没有出错，则输出内容
//   console.log(data.toString())
// })

// 3. 使用Promise封装
const p = new Promise((resolve,reject) => {
  fs.readFile('23-text.mda', (err, data) =>{
    if(err) reject(err)
    resolve(data)
  })
})

p.then(function (value) {
  console.log(value)
}, function (reason) {
  console.log('读取失败')
})
