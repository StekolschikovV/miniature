window.electron = require('electron')
window.ipc = electron.ipcRenderer
window.remote = electron.remote
window.Dexie = require('dexie')
var $ = require("jquery")
var fs = require("fs")
var request = require('request').defaults({ encoding: null })

var events = require('events')
var eventEmitter = new events.EventEmitter() // openPage, loadFinish, back,  forward, updatePage


// disable dragdrop, since it currently doesn't work
window.addEventListener('drop', function (e) {
  e.preventDefault()
})

// add a class to the body for fullscreen status

ipc.on('enter-full-screen', function () {
  console.log('enter-full-screen')
  document.body.classList.add('fullscreen')
})

ipc.on('leave-full-screen', function () {
  console.log('leave-full-screen')
  document.body.classList.remove('fullscreen')
})

window.addEventListener('load', function (e) {
  if (navigator.platform !== 'MacIntel') {
    document.body.classList.add('notMac')
  }

})

//
// // // In renderer process (web page).
// let {ipcRenderer} = require('electron')
// // console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
//
// // setInterval(function () {
//   ipcRenderer.send('asynchronous-message', 'ping')
// // }, 1000)
// ipcRenderer.on('asynchronous-reply', (event, arg) => {
//   console.log('def') // prints "pong"
// })
