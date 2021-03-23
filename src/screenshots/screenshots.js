
const screenshot = require('screenshot-desktop')
const path = require('path')

const getScreenshot = async()=>{
 await screenshot.listDisplays()
  .then((displays) => {
    console.log(displays)
    for (let index = 0; index < displays.length; index++) {
      const display = displays[index]
      const imgpath = path.join(__dirname+'/shots/',Date.now() + '_' + index + '.jpg')
      screenshot({ screen: display.id, filename: imgpath,format:'jpg'})
      .then((imgpath) => {
        // console.log(imgpath)
      }).catch(err => {
        console.error(err)
      })
    }
  })

}



module.exports = getScreenshot



