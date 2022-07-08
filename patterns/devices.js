import prng from '../prng/index.js'
// Service stars
const serviceStars = (canvas) => {
  const imageId = prng() > 0.5 ? 'serviceStarBronze' : 'serviceStarSilver'
  const image = document.getElementById(imageId)

  const ctx = canvas.getContext('2d')
  const imageRatio =  (canvas.height / 2) / image.height
  const starHeight = image.height * imageRatio
  const starWidth = image.width * imageRatio

  const numberOfStars = Math.round(prng() * 4 + 1)
  for (let i = 0; i < numberOfStars; i++) {
     ctx.drawImage(image, ((i + 1) * (canvas.width ) / (numberOfStars + 1)) - starWidth / 2, starHeight / 2, starWidth, starHeight)
  }
}
// Arrowhead
const arrowHead = (canvas) => {
  const image = document.getElementById('arrowhead')

  const ctx = canvas.getContext('2d')
  const imageRatio =  (canvas.height / 2) / image.height
  const arrowHeight = image.height * imageRatio
  const arrowWidth = image.width * imageRatio

  ctx.drawImage(image, (canvas.width  - arrowWidth) / 2, arrowHeight / 2, arrowWidth, arrowHeight)
}

// V device
const Vdevice = (canvas) => {
  const image = document.getElementById('Vdevice')

  const ctx = canvas.getContext('2d')
  const imageRatio =  (canvas.height / 2) / image.height
  const VHeight = image.height * imageRatio
  const VWidth = image.width * imageRatio

  ctx.drawImage(image, (canvas.width  - VWidth) / 2, VHeight / 2, VWidth, VHeight)
}
  // R device
const Rdevice = (canvas) => {
  const image = document.getElementById('Rdevice')

  const ctx = canvas.getContext('2d')
  const imageRatio =  (canvas.height / 2) / image.height
  const RHeight = image.height * imageRatio
  const RWidth = image.width * imageRatio

  ctx.drawImage(image, (canvas.width  - RWidth) / 2, RHeight / 2, RWidth, RHeight)


}
// If then statements
const devices = (canvas) => {
  if (prng() < 0.5) {
    serviceStars(canvas)
  } 

      // V device option
      else if (prng() < 0.3) {
        Vdevice(canvas)
      }
          // R device option
          else if (prng() < 0.4) {
            Rdevice(canvas)
          }
      
  
  else {
    arrowHead(canvas)
  }

}

export default devices
