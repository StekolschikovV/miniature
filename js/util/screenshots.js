const {desktopCapturer, screen} = require('electron')

function getScreen(callback) {
  var _this = this
  this.callback = callback

  this.handleStream = (stream) => {
    // console.log('stream',stream)
    // Create hidden video tag
    var video = document.createElement('video')
    video.style.cssText = 'position:absolutetop:-10000pxleft:-10000px'
    // Event connected to stream
    video.onloadedmetadata = function () {
      // Set video ORIGINAL height (screenshot)
      video.style.height = this.videoHeight + 'px' // videoHeight
      video.style.width = this.videoWidth + 'px' // videoWidth

      // Create canvas
      var canvas = document.createElement('canvas')
      canvas.width = this.videoWidth
      canvas.height = this.videoHeight
      var ctx = canvas.getContext('2d')
      // Draw video on canvas
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

      if (_this.callback) {
        // Save screenshot to jpg - base64
        _this.callback(canvas.toDataURL('image/jpeg'))
      } else {
        console.log('Need callback!')
      }

      // Remove hidden video tag
      video.remove()
      try {
        // Destroy connect to stream
        stream.getTracks()[0].stop()
      } catch (e) {
      }
    }
    video.src = URL.createObjectURL(stream)
    document.body.appendChild(video)
  }

  this.handleError = function (e) {
    console.log(e)
  }

  var screen;

  desktopCapturer.getSources({types: [/*'window',*/ 'screen']}, (error, sources) => {
    if (error) throw error

    screen = sources[0].thumbnail.toDataURL()

    console.log('base64: ', screen)

    document.body.innerHTML = '<img id="screen" src="'+screen+'" />';

    for (let i = 0; i < sources.length; ++i) {
      // Filter: main screen
      if (sources[i].name === "Entire screen") {
        navigator.webkitGetUserMedia({
          audio: false,
          video: {
            mandatory: {
              chromeMediaSource: 'desktop',
              chromeMediaSourceId: sources[i].id,
              minWidth: 1280,
              maxWidth: 4000,
              minHeight: 720,
              maxHeight: 4000
            }
          }
        }, this.handleStream, this.handleError)

        return
      }
    }
  })

}