const fs = require('fs')
const {template} = require('./svg-template')
const {dpToPixel} = require('./utils')
const {devicesData} = require('../resources/devices')
const {createVerticalGuidesLines} = require('./guidelines')

const devices = devicesData.map(device => {
  return {
    gutter: parseInt(device.gutterl),
    gutterCm: dpToPixel(parseInt(device.gutterl)),
    description: device.device,
    density: device.density,
    densityBucket: device.densitybucket,
    verticalCollumns: parseInt(device.columnsp),
    horizontalCollumns: parseInt(device.columnsl),
    platform: device.platform,
    height: parseInt(device.pxscreenh.replace(/\D/g, '')),
    width: device.pxscreenw,
    screenDefaultorientation: device.screendefaultorientation
  }
})

const buildTemplate = device => {

  const gutter = device.gutterCm
    .filter(item => item.scale.trim() === device.density)
    .map(item => item.pixel)[0]
  const filename = device.description.replace(/[^\w\s]*/g, '')
  const guideLines = createVerticalGuidesLines(
      device.width,
      gutter,
      device.verticalCollumns)
    .map(x => {
      return {
        x: x,
        y: 0,
        ox: 1,
        oy: 0
      }
    })
  const svg = template(
    filename,
    device.width,
    device.height,
    guideLines)

  fs.writeFile(__dirname + `/../svg/${filename}.svg`, svg, error => {
    if (error) {
      return console.log(error)
    }
    console.log(filename + '.svg file saved')
  })
}


devices.forEach(device => {
  buildTemplate(device)
})
