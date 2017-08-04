let favicon = {
  addTabButton: '',
  start: function () {
    favicon.addTabButton = document.getElementById('add-tab-button')
    favicon.event()
    favicon.setFaviconAll()
  },
  event: function () {
    eventEmitter.addListener('openPage', function () {
      favicon.setFaviconAll()
      setTimeout(function () { favicon.setFaviconAll() }, 100)
      setTimeout(function () { favicon.setFaviconAll() }, 500)
      setTimeout(function () { favicon.setFaviconAll() }, 1000)
    })
    favicon.addTabButton.addEventListener('click', function (e) {
      favicon.setFaviconAll()
      setTimeout(function () { favicon.setFaviconAll() }, 100)
      setTimeout(function () { favicon.setFaviconAll() }, 500)
      setTimeout(function () { favicon.setFaviconAll() }, 1000)
    })
  },
  setFaviconAll () {
    for (let i = 0; i < tabs.length; i++) {
      let tabFavicon = document.querySelector('.tab-item[data-tab="' + tabs[i].id + '"] img')
      let tabUrl = new URL(tabs[i].url, location)
      let url = 'http://' + tabUrl.hostname + '/favicon.ico'
      try {
        req.open("GET", url, false)
        req.send("")
      } catch (e) {
        tabFavicon.src = ''
        tabFavicon.removeAttribute('src')
      }


        // let http = new XMLHttpRequest()
        // http.open('HEAD', url, false)
        // http.send()
        // if(http.status !== 404) {
        //   tabFavicon.src = 'http://' + tabUrl.hostname + '/favicon.ico'
        // }

      if(tabUrl.hostname !== '')
        tabFavicon.src = url
    }
  }
}
favicon.start()
