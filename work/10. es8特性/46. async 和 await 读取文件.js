const fs = require("fs")

function read() {
  return new Promise((resolve, reject) => {
    fs.readFile("26-text3.md", (err, data) => {
      if(err) reject(err)
      resolve(data)
    })
  })
}

async function fn() {
  let r = await read()

  console.log(r.toString())
}

fn()
