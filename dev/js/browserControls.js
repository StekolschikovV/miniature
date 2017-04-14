
var back = document.getElementById('back')
var forward = document.getElementById('forward')
var refresh = document.getElementById('refresh')
var menu = document.getElementById('menu')

back.addEventListener('click', function () {
    getWebview(tabs.getSelected()).goBack()
})

forward.addEventListener('click', function () {
    getWebview(tabs.getSelected()).goForward()
})

refresh.addEventListener('click', function () {
    getWebview(tabs.getSelected()).reload()
})

menu.addEventListener('click', function () {
  /*getScreen(function(image) {
    console.log('image', image)
  })*/
})