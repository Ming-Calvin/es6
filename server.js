const express = require('express')

const app = express()

app.get('/server', (request, respone) => {
  respone.setHeader('Access-Control-Allow-Origin', '*')

  respone.send('11')
})

app.listen('8000', function () {
  console.log('启动成功')
})
