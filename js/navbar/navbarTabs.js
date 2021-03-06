var tabContainer = document.getElementsByClassName('page-tabs')[0]
var tabGroup = tabContainer.querySelector('#tabs') // TODO these names are confusing

/* tab events */

var lastTabDeletion = 0

/* draws tabs and manages tab events */

function getTabInput (tabId) {
  return document.querySelector('.tab-item[data-tab="{id}"] .tab-input'.replace('{id}', tabId))
}

function getTabElement (id) { // gets the DOM element for a tab
  return document.querySelector('.tab-item[data-tab="{id}"]'.replace('{id}', id))
}

function setActiveTabElement (tabId) {
  var activeTab = document.querySelector('.tab-item.active')

  if (activeTab) {
    activeTab.classList.remove('active')
  }

  var el = getTabElement(tabId)
  el.classList.add('active')

  requestIdleCallback(function () {
    requestAnimationFrame(function () {
      el.scrollIntoView({
        behavior: 'smooth'
      })
    })
  }, {
    timeout: 1500
  })
}

function leaveTabEditMode (options) {

  var selTab = document.querySelector('.tab-item.selected')
  if (selTab) {
    selTab.classList.remove('selected')
  }
  if (options && options.blur) {
    var input = document.querySelector('.tab-item .tab-input:focus')
    if (input) {
      input.blur()
    }
  }

  document.body.classList.remove('is-edit-mode')
  hidesearchbar()
}

function enterEditMode (tabId) {
  // taskOverlay.hide()

  var tabEl = getTabElement(tabId)
  var webview = getWebview(tabId)

  var currentURL = tabs.get(tabId).url

  if (currentURL === 'about:blank') {
    currentURL = ''
  }

  var input = getTabInput(tabId)

  document.body.classList.add('is-edit-mode')
  tabEl.classList.add('selected')

  input.value = currentURL
  input.focus()
  input.select()

  showSearchbar(input)
  showSearchbarResults('', input, null)

  // show keyword suggestions in the searchbar

  if (webview.send) { // before first webview navigation, this will be undefined
    webview.send('getKeywordsData')
  }
}

// redraws all of the tabs in the tabstrip
function rerenderTabstrip () {
  empty(tabGroup)
  for (var i = 0; i < tabs.length; i++) {
    tabGroup.appendChild(createTabElement(tabs[i]))
  }


  // for (var i = 0; i < tabs.length; i++) {
  //   tabGroup.appendChild( createTabElement(tabs[i]) )
  // }
  //
  // let tabEls = document.querySelectorAll( '.tab-item' )
  // let tabElsLength = tabEls.length
  // let newArr = []
  // for( let i = 0; i < tabElsLength; i++ ){
  //   newArr.push( tabEls[ i ] )
  // }
  // document.querySelector( '#tabs' ).innerHTML = ''
  // for(  let i = 0; i < tabElsLength; i++  ){
  //   tabGroup.appendChild( newArr[ (tabElsLength - 1) - i ] )
  //
  // }

  // document.querySelectorAll( '.tab-item' )[0].remove()
  // console.log( newArr )



//   console.log( '9999999999999999999999999' )
// console.log( tabGroup.length )
//   console.log( '9999999999999999999999999' )
  tabCount()
}

function tabCount() {
    tabGroup.className = tabGroup.className.replace(/tabs\d+/, '')
    tabGroup.classList.add('tabs' + tabs.length)
}

function tabLayout () {

}

function rerenderTabElement (tabId) {

  var tabEl = getTabElement(tabId)
  var tabData = tabs.get(tabId)

  var tabTitle = tabData.title || 'New Tab'
  var title = tabEl.querySelector('.tab-view-contents .title')

  title.textContent = tabTitle
  title.title = tabTitle

  var secIcon = tabEl.getElementsByClassName('icon-tab-not-secure')[0]

  // update the star to reflect whether the page is bookmarked or not
  bookmarks.renderStar(tabId)
}

function createTabElement (data) {

  var url = urlParser.parse(data.url)

  var tabEl = document.createElement('div')
  tabEl.className = 'tab-item'
  tabEl.setAttribute('data-tab', data.id)

  /* css :hover selectors are buggy when a webview is focused */
  tabEl.addEventListener('mouseenter', function (e) {
    this.classList.add('jshover')
  })

  tabEl.addEventListener('click', function (e) {
    sessionRestore.save()
    CT.render()
    setTimeout(function () {
      sessionRestore.save()
      CT.render()
    }, 100)
  })

  tabEl.addEventListener('mouseleave', function (e) {
    this.classList.remove('jshover')
  })

  var ec = document.createElement('div')
  ec.className = 'tab-edit-contents'

  var input = document.createElement('input')
  input.className = 'tab-input mousetrap'
  input.setAttribute('placeholder', 'Search or enter address')
  input.value = url

  ec.appendChild(input)
  ec.appendChild(bookmarks.getStar(data.id))

  tabEl.appendChild(ec)

  var vc = document.createElement('div')
  vc.className = 'tab-view-contents'
  // vc.appendChild(readerView.getButton(data.id))

  // icons

  var iconArea = document.createElement('span')
  iconArea.className = 'tab-icon-area'

  var closeTabButton = document.createElement('i')
  closeTabButton.classList.add('tab-close-button')
  closeTabButton.classList.add('fa')
  closeTabButton.classList.add('fa-close')

  closeTabButton.addEventListener('click', function (e) {
    closeTab(data.id)
    sessionRestore.save()
    CT.render()

    // prevent the searchbar from being opened
    e.stopPropagation()
  })

  iconArea.appendChild(closeTabButton)

  if (data.private) {
    iconArea.insertAdjacentHTML('afterbegin', "<i class='fa fa-eye-slash icon-tab-is-private tab-info-icon'></i>")
    vc.setAttribute('title', 'Private tab')
  }

  vc.appendChild(iconArea)

  // favicon

  var favicon = document.createElement('img')
  favicon.className = 'favicon'
  vc.appendChild(favicon)

  // title

  var title = document.createElement('span')
  title.className = 'title'
  title.textContent = data.title || '...'

  vc.appendChild(title)

  tabEl.appendChild(vc)


  /* events */

  input.addEventListener('keydown', function (e) {
    if (e.keyCode === 9 || e.keyCode === 40) { // if the tab or arrow down key was pressed
      focussearchbarItem()
      e.preventDefault()
    }
  })

  // keypress doesn't fire on delete key - use keyup instead
  input.addEventListener('keyup', function (e) {
    if (e.keyCode === 8) {
      showSearchbarResults(this.value, this, e)
    }
  })

  input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) { // return key pressed; update the url
      openURLFromsearchbar(e, this.value)

      // focus the webview, so that autofocus inputs on the page work
      getWebview(tabs.getSelected()).focus()
    } else if (e.keyCode === 9) {
      return
    // tab key, do nothing - in keydown listener
    } else if (e.keyCode === 16) {
      return
    // shift key, do nothing
    } else if (e.keyCode === 8) {
      return
    // delete key is handled in keyUp
    } else { // show the searchbar
      showSearchbarResults(this.value, this, e)
    }

    // on keydown, if the autocomplete result doesn't change, we move the selection instead of regenerating it to avoid race conditions with typing. Adapted from https://github.com/patrickburke/jquery.inlineComplete

    var v = String.fromCharCode(e.keyCode).toLowerCase()
    var sel = this.value.substring(this.selectionStart, this.selectionEnd).indexOf(v)

    if (v && sel === 0) {
      this.selectionStart += 1
      e.preventDefault()
    }
  })

  // prevent clicking in the input from re-entering edit-tab mode

  input.addEventListener('click', function (e) {
    e.stopPropagation()
  })

  // click to enter edit mode or switch to a tab
  tabEl.addEventListener('click', function (e) {
    if (e.which === 2) { // if mouse middle click -> close tab
      closeTab(data.id)
    } else if (tabs.getSelected() !== data.id) { // else switch to tab if it isn't focused
      switchToTab(data.id)
    } else { // the tab is focused, edit tab instead
      enterEditMode(data.id)
    }
  })

  return tabEl

}

function addTab (tabId, options) {

  // debugger;

  /*
  options

    options.focus - whether to enter editing mode when the tab is created. Defaults to true.
    options.openInBackground - whether to open the tab without switching to it. Defaults to false.
    options.leaveEditMode - whether to hide the searchbar when creating the tab
  */

  options = options || {}

  if (options.leaveEditMode !== false) {
    leaveTabEditMode() // if a tab is in edit-mode, we want to exit it
  }

  tabId = tabId || tabs.add()




  var tab = tabs.get(tabId)


  console.log( '++++++++++++++++++++++++++++++++++++++++++++' )
  console.log( tabId )
  console.log( tab )
  console.log( '++++++++++++++++++++++++++++++++++++++++++++' )

  // use the correct new tab colors

  if (tab.private && !tab.backgroundColor) {
    tabs.update(tabId, {
      backgroundColor: defaultColors.private[0],
      foregroundColor: defaultColors.private[1]
    })
  } else if (!tab.backgroundColor) {
    tabs.update(tabId, {
      backgroundColor: defaultColors.regular[0],
      foregroundColor: defaultColors.regular[1]
    })
  }

  findinpage.end()

  var index = tabs.getIndex(tabId)

  var tabEl = createTabElement(tab)

  // tabGroup.insertBefore(tabEl, tabGroup.childNodes[0])
  tabGroup.insertBefore(tabEl, tabGroup.firstChild)
  console.log( '-----------------------------------------------------' )
  console.log( tabGroup )
  console.log( tabGroup.childNodes[0] )
  console.log( '-----------------------------------------------------' )

  addWebview(tabId)

  // open in background - we don't want to enter edit mode or switch to tab

  if (options.openInBackground) {
    return
  }

  switchToTab(tabId, {
    focusWebview: false
  })

  if (options.enterEditMode !== false) {
    // enterEditMode(tabId)
  }

    tabCount()

}

// startup state is created in sessionRestore.js

// when we click outside the navbar, we leave editing mode

bindWebviewEvent('focus', function () {
  leaveTabEditMode()
  findinpage.end()
})