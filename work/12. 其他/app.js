// import * as method from "./method.js"

const btn = document.querySelector('button')
btn.onclick = function () {
  import('./method.js').then(module => {
    console.log(module)

    module.fn()
  })
}
