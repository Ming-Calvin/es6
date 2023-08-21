// 避免回调地狱(回调函数一层嵌入一层)
const fs = require('fs')

const p = new Promise((resolve, reject) => {
  fs.readFile('./26-text1.md', (error, data) => {
    if(error) reject(error)
    resolve(data)
  })
})

p.then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./26-text2.md', (error, data) => {
      if(error) reject(error)
      resolve([value, data])
    })
  })
}).then(value => {
  return new Promise((resolve, reject) => {
    fs.readFile('./26-text3.md', (error, data) => {
      if(error) reject(error)
      // 压入
      value.push(data)
      resolve(value)
    })
  })
}).then(value => {
  console.log(value.join('\r\n'))
})
