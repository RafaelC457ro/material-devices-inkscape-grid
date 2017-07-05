const {template} = require("./svg-template")
const fs = require("fs")

fs.writeFile('../svg/test.svg',template(), error => {
  if(error){
    return console.log(error)
  }
  console.log('file saved')
})
