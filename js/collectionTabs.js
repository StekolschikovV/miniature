// function collectionTabs (){
//
//     let collectionTabsContainer = document.getElementById('collection-tabs')
//
//     let webpreviewContainer = document.getElementById('webpreview')
//     let tabsContainer = document.getElementById('tabs')
//
//
//     let btnSwitchTask = document.getElementById('switch-task-button')
//     let taskOverlay = document.getElementById('task-overlay')
//
//
//     taskOverlay.style.display = 'none'
//     btnSwitchTask.click()
//     btnSwitchTask.click()
//     taskOverlay.style.display = 'block'
//
//     let idPrev = ''
//
//     collectionTabsContainer.addEventListener('click', function (e) {
//       // console.log('click', '--- --- ---')
//
//         // console.log('1---', e)
//         // e.target.type if type text
//         let taskId = ''
//         let taskIndex = ''
//
//       //
//
//         if( e.target.type == 'text' ){
//           taskId = e.target.parentElement.dataset.taskId
//           taskIndex = e.target.parentElement.dataset.index;
//           e.target.parentElement.className += ' active-tab'
//         } else {
//           taskId = e.target.dataset.taskId
//           taskIndex = e.target.dataset.index;
//         }
//         // console.log('2---', taskId)
//         // console.log('3---', taskIndex)
//
//         let tabId = tabState.tasks[taskIndex].tabs[0].id;
//         // console.log('4---', tabId)
//         let tab = document.querySelector('[data-tab="' + tabId + '"]')
//         // console.log('5---', tab)
//         let tabActive = document.querySelector('.active-tab.collection-tab')
//         // console.log('6---', tabActive)
//
//         if(tabActive)
//             tabActive.classList.remove('active-tab')
//
//         e.target.classList.add('active-tab')
//
//         // DONE: get id and pre id
//         // DONE: id == pre id
//               // DONE: add input
//               // DONE: input enter - save in DB
//               // DONE: remove input
//         // if(idPrev == '') {
//         //   let idNow = e.target.getAttribute('data-task-id')
//         //   idPrev = idNow
//         // }
//         // else {
//         //   let idNow = e.target.getAttribute('data-task-id')
//         //
//         //   if(idNow == idPrev){
//         //
//         //     nameInDB = tabState.tasks[taskIndex].name
//         //     if( nameInDB == 'null' || nameInDB == null )
//         //       nameInDB = ''
//         //     tabActive.insertAdjacentHTML('beforeend', `<input type="text" value="${nameInDB}">`)
//         //
//         //     let collectionTabsInput = document.querySelector('#collection-tabs > div input')
//         //
//         //     setTimeout(function () {
//         //       collectionTabsInput.focus()
//         //     }, 0)
//         //
//         //     collectionTabsInput.addEventListener('keydown', function (e) {
//         //
//         //       console.log('     keydown', '--- --- ---')
//         //       console.log('     e.target', e.target)
//         //       console.log('     e.target.value', e.target.value)
//         //
//         //       if (e.which == 13) {
//         //
//         //         let eTarget = e.target
//         //         let eVal = e.target.value
//         //
//         //         // console.log(eTarget, eVal, tabState.tasks[taskIndex].name, taskIndex)
//         //
//         //         // tabState.tasks[0].name = 1
//         //
//         //         if( e.target.value !== null )
//         //           tabState.tasks[taskIndex].name  = e.target.value
//         //
//         //         // console.log(eTarget, eVal, tabState.tasks[taskIndex].name)
//         //
//         //         // eTarget.parentElement.innerHTML = e.target.value
//         //
//         //         // eTarget.remove()
//         //         collectionTabs().render()
//         //       }
//         //
//         //       console.log('     --- --- ---', 'keydown')
//         //
//         //     })
//         //
//         //     collectionTabsInput.addEventListener('focusout', function (e) {
//         //       setTimeout(function () {
//         //         if(document.querySelector('#collection-tabs > div input') !== null){
//         //             let eAll = document.querySelectorAll('#collection-tabs > div input')
//         //             let eTarget = e.target
//         //             eTarget.remove()
//         //         }
//         //       }, 0)
//         //     })
//         //   }
//         //
//         //   idPrev = idNow
//         // }
//
//         tab.click()
//       // console.log('--- --- ---', 'click')
//     })
//
//
//     return {
//         render: function () {
//
//             let collectionTabsHTML = [];
//
//             tasks.get().forEach(function( task, i ) {
//                 // let title = task.name || 'Collection ' + (i + 1);
//                 let title = task.name || '<svg width="23.9px" height="5.6px">23.9 5.6 <use xlink:href="icons/svg/miniature-controls.svg#ellipsis-big"></use></svg>';
//                 collectionTabsHTML.push('<div class="collection-tab ' + ( i == 0 ? 'active-tab' : '') + ' " data-task-id="' + task.id + ' " data-index="' + i + '">' + title + '</div>')
//             })
//
//             collectionTabsContainer.innerHTML = collectionTabsHTML.join('')
//
//           // eventEmitter.emit('collectionTabsRender')
//           // showEvent("collectionTabsRender")
//           // renderHalper.start()
//         }
//
//     }
//
//
//
//
//
// }
//
// renderHalper = {
//   taskId: '',
//   taskIndex: '',
//   tabId: '',
//   tab: '',
//   tabActive: '',
//   prevTabIndex: '0',
//   start(){
//     renderHalper.event()
//
//   },
//   event(){
//
//     document.getElementById('collection-tabs').addEventListener('click', function (e) {
//
//       renderHalper.getDataFromE(e)
//
//       if(renderHalper.prevTabIndex == renderHalper.taskIndex){
//
//         renderHalper.addInput()
//
//         // setTimeout(function () {
//           document.querySelector('#collection-tabs > div input').focus()
//           console.log('eeeeeeeeee', document.querySelectorAll('#collection-tabs > div input').length)
//         // }, 0)
//
//
//
//         if(renderHalper.tabActive)
//           renderHalper.tabActive.classList.remove('active-tab')
//
//         e.target.classList.add('active-tab')
//
//         document.querySelector('#collection-tabs > div input').addEventListener('keydown', function (e) {
//           renderHalper.clickEnterE(e)
//         })
//
//         document.querySelector('#collection-tabs > div input').addEventListener('focusout', function (e) {
//           renderHalper.inputFocusout()
//         })
//       }
//
//       renderHalper.tab.click()
//
//       renderHalper.prevTabIndex = renderHalper.taskIndex
//     })
//
//
//   },
//   getDataFromE(e){
//     if( e.target.type == 'text' ){
//       renderHalper.taskId = e.target.parentElement.dataset.taskId
//       renderHalper.taskIndex = e.target.parentElement.dataset.index
//       e.target.parentElement.className += ' active-tab'
//     } else {
//       renderHalper.taskId = e.target.dataset.taskId
//       renderHalper.taskIndex = e.target.dataset.index
//     }
//     renderHalper.tabId = tabState.tasks[renderHalper.taskIndex].tabs[0].id;
//     renderHalper.tab = document.querySelector('[data-tab="' + renderHalper.tabId + '"]')
//     renderHalper.tabActive = document.querySelector('.active-tab.collection-tab')
//   },
//   render(){
//     let collectionTabsHTML = [];
//     tasks.get().forEach(function( task, i ) {
//       let title = task.name || '<svg width="23.9px" height="5.6px">23.9 5.6 <use xlink:href="icons/svg/miniature-controls.svg#ellipsis-big"></use></svg>';
//       collectionTabsHTML.push('<div class="collection-tab ' + ( i == 0 ? 'active-tab' : '') + ' " data-task-id="' + task.id + ' " data-index="' + i + '">' + title + '</div>')
//     })
//     document.getElementById('collection-tabs').innerHTML = collectionTabsHTML.join('')
//     renderHalper.start()
//   },
//   addInput(){
//     let nameInDB = tabState.tasks[renderHalper.taskIndex].name
//     if( nameInDB == 'null' || nameInDB == null )
//       nameInDB = ''
//     if(renderHalper.tabActive != null)
//       renderHalper.tabActive.insertAdjacentHTML('beforeend', `<input type="text" value="${nameInDB}">`)
//   },
//   clickEnterE(e){
//     if (e.which == 13) {
//
//       let eVal = e.target.value
//
//       if( e.target.value !== null )
//         tabState.tasks[renderHalper.taskIndex].name  = eVal
//
//       renderHalper.render()
//     }
//   },
//   inputFocusout(){
//     renderHalper.render()
//   }
//
// }
// renderHalper.render()
// // collectionTabs().render();

say = {

  m (text) {
    console.log('%c ' + text, 'background:green;color:#fff;padding:2px 10px 2px 5px')
  },
  d (text) {
    console.log('%c ' + text, 'background:#e4a530;color:#fff;margin-left:50px;padding:2px 20px')
  },
  dd (text, param) {
    console.log('%c ' + text + ' ' + param, 'background:#e4a530;color:#fff;margin-left:50px;padding:2px 20px')
  },
  o (obj) {
    console.log(obj)
  }
}

CT = {

  taskId: '',
  taskIndex: '',
  tabId: '',
  tab: '',
  tabActive: '',
  prevTabIndex: [],
  inputFocus: false,

  start () {
    say.m('CT.start()')

    CT.prevTabIndex = []
    CT.taskId = tabState.selectedTask
    CT.add5()
    // tabState.selectedTask = tabState.tasks[0].id
    // // CT.prevTabIndex.push(0)
    CT.loadTasks()
    CT.render()
    CT.events()
    // CT.clickOnFirstCollection()
  },
  events () {
    say.m('CT.events()')

    document.getElementById('collection-tabs').addEventListener('click', function (e) {
      CT.goToCollection(e)
    })

    let taskName = document.querySelectorAll('.task-action-container .task-name')
    for (var i = 0; i < taskName.length; i++) {
      taskName[i].addEventListener('click', function (event) {
        CT.overviewTaskNameClickE(event)
      })
      taskName[i].addEventListener('keydown', function (e) {
        CT.overviewTaskNameClickEnterE(e)
      })

    }
  },

  goToCollection (e) {
    say.m('CT.goToCollection(e):')
      say.o(e)

    // click on collection tabs
    try {
      if(e.target.parentNode.parentNode.id == 'collection-tabs'){
        if(e.target.parentNode.className.indexOf("active-tab") == -1){
          tabState.selectedTask = e.target.parentNode.dataset.taskId.trim()
          switchToTask(e.target.parentNode.dataset.taskId.trim())
          sessionRestore.save()
          CT.render()
          for(let i = 0; i < tabState.tasks.length; i++){
            if(tabState.tasks[i].id == tabState.selectedTask){
              if(tabState.tasks[i].name == null){
                document.querySelector('.active-tab input').disabled = false
                document.querySelector('.active-tab input').focus()
              }
            }
          }
          // if( tabState.selectedTask == ''){
          //   document.querySelector('.active-tab input').disabled = false
          //   document.querySelector('.active-tab input').focus()
          // }

        } else {
          document.querySelector('.active-tab input').disabled = false
          document.querySelector('.active-tab input').focus()
        }

        // if(e.target.parentNode.className.indexOf("active-tab") > -1 || e.target.value != ''){
        //     document.querySelector('.active-tab input').disabled = false
        //     document.querySelector('.active-tab input').focus()
        // } else

        // if(e.target.parentNode.className.indexOf("active-tab") == -1){
        //   tabState.selectedTask = e.target.parentNode.dataset.taskId.trim()
        //   switchToTask(e.target.parentNode.dataset.taskId.trim())
        //   sessionRestore.save()
        //   CT.render()
        // }
      }
    } catch (e) {}

    // edit name collection tabs
    document.querySelector('.active-tab input').addEventListener('keydown', function (e) {
      if (e.which == 13) {
        if(e.target.value != '') {
          for(let i = 0; i < tabState.tasks.length; i++){
            if(tabState.tasks[i].id == e.target.getAttribute('data-id')){
              tabState.tasks[i].name = e.target.value
            }
          }
        }
        sessionRestore.save()
        CT.render()
      }
    })


    //
    // // input focusout - disabled = true
    // document.querySelector('.active-tab input').addEventListener('focusout', function (e) {
    //   document.querySelector('.active-tab input').disabled = true
    // })
    //
    // // first click (1) - edit fild in first collacion tab
    // // if(CT.prevTabIndex.length == 1){
    // //   document.querySelector('.active-tab input').disabled = false
    // // } else if( CT.prevTabIndex.length == 2){
    // //   document.querySelector('.active-tab input').focus()
    // // }
    //
    // // double click on tab collection - edit mod
    // try{
    //   console.log('/-----------------------------------------------------------------------------')
    //   console.log( tabState.tasks[CT.prevTabIndex[CT.prevTabIndex.length - 2]].id )
    //   console.log( tabState.selectedTask )
    //   console.log( CT.prevTabIndex.length )
    //   console.log( CT.prevTabIndex )
    //   console.log( document.querySelector( '.active-tab' ) )
    //   console.log( 'e.target ', e.target )
    //   console.log( 'e.target.className ', e.target.className )
    //   console.log( 'e.target.parentNode ', e.target.parentNode )
    //   console.log( 'e.target.parentNode.className ', e.target.parentNode.className )
    //   // let res = e.target.parentNode.className.className.indexOf("active-tab")
    //   let res = e.target.parentNode.className.toString()
    //   console.log( 'e.target.parentNode.className.className.indexOf("active-tab") ', res.indexOf("active-tab") )
    //   console.log('-----------------------------------------------------------------------------/')
    //
    //
    //   // if( tabState.tasks[CT.prevTabIndex[CT.prevTabIndex.length - 2]].id == tabState.selectedTask){
    //   if( res.indexOf("active-tab") != -1){
    //     document.querySelector('.active-tab input').disabled = false
    //     document.querySelector('.active-tab input').focus()
    //   }
    //   // else {
    //   //   switchToTask(CT.taskId.toString().trim())
    //   // }
    // }catch(err){
    //   if(document.querySelector('[data-task-id="' + CT.taskId + '"]').className.indexOf("active-tab") > -1){
    //     document.querySelector('.active-tab input').disabled = false
    //     document.querySelector('.active-tab input').focus()
    //   }
    // }
    //
    // // press enter in edit mode
    // document.querySelector('.active-tab input').addEventListener('keydown', function (e) {
    //   let eVal = e.target.value
    //   if (e.which == 13) {
    //     tabState.tasks[CT.taskIndex].name = eVal
    //     sessionRestore.save()
    //     if(document.querySelector('#task-overlay').getAttribute('hidden') == null)
    //       taskOverlay.show()
    //     CT.render()
    //   }
    // })
    //
    // // add selection BG if click on new tab collection
    // if (CT.prevTabIndex[CT.prevTabIndex.length - 1] != CT.prevTabIndex[CT.prevTabIndex.length - 2]) {
    //   CT.collectionTopAddBGSelected(CT.taskIndex)
    // }
    //
    //
    // CT.getDataFromE(e)
    //
    // sessionRestore.save()

  },
  getDataFromE (e) {
    say.m('CT.getDataFromE(e)' + e)

    if (e.target.type == 'text') {
      CT.taskId = e.target.parentElement.dataset.taskId
      CT.taskIndex = e.target.parentElement.dataset.index
      // e.target.parentElement.className += ' active-tab'
    } else {
      CT.taskId = e.target.dataset.taskId
      CT.taskIndex = e.target.dataset.index
    }

    CT.tabId = tabState.tasks[CT.taskIndex].tabs[0].id

    CT.tab = document.querySelector('[data-tab="' + CT.taskIndex + '"]') // Это страница
    CT.tabActive = document.querySelector('.active-tab.collection-tab')

    CT.prevTabIndex.push(CT.taskIndex) // history tabs

    tabState.selectedTask = tabState.tasks[CT.prevTabIndex[CT.prevTabIndex.length - 1]].id

    say.dd('taskId', CT.taskId)
    say.dd('taskIndex', CT.taskIndex)
    say.dd('tabId', CT.tabId)
    say.d('tab:')
    say.o(CT.tab)
    say.d('tabActive:')
    say.o(CT.tabActive)

  },
  loadTasks () {
    tasks.get().forEach(function (task, index) {
      var el = getTaskElement(task, index)
      taskContainer.appendChild(el)
      taskOverlay.dragula.containers.push(el.getElementsByClassName('task-tabs-container')[0])
    })
  },
  clickOnFirstCollection () {
    document.querySelector('[data-task-id="' + tasks.get()[0].id + ' "]').click()
  },
  add5 () {
    if (tabState.tasks.length < 5) {
      for (let i = tabState.tasks.length; i != 5; i++) {
        switchToTask(tasks.add())
      }
    }
  },
  overviewTaskNameClickEnterE(e){
    say.m('CT.overviewTaskNameClickEnterE()')

    let id = e.target.parentElement.parentElement.getAttribute('data-task')
    let eTarget = e.target
    let eVal = e.target.value
    if (e.which == 13) {
      CT.render()
      for (let i = 0; i < tasks.get().length; i++){
        if(tasks.get()[i].id == id){
          if(i <= 5){
            document.querySelector(`[data-index="${i}"]`).click()
          }
        }
      }
    }
  },
  overviewTaskNameClickE(e){
    say.m('CT.overviewTaskNameClickE()')

    let id = e.target.parentElement.parentElement.getAttribute('data-task')
    for (let i = 0; i < tasks.get().length; i++){
      if(tasks.get()[i].id == id){
        if(i <= 5){
          CT.collectionTopClickOnCollectionTab(i)
          CT.collectionLeftFocusOnCollectionTabInput(id)
        }
      }
    }
  },

  collectionTopClickOnCollectionTab(index){
    document.querySelector(`[data-index="${index}"]`).click()
  },
  collectionTopRemoveBGSelectedAll(){
    let elems = document.querySelectorAll(".active-tab");
    for (var i = 0; i < elems .length; i++)
      elems[i].classList.remove('active-tab');
  },
  collectionTopAddBGSelected(index){
    CT.collectionTopRemoveBGSelectedAll()
    document.querySelector(`[data-index="${index}"]`).classList.add('active-tab')
  },
  collectionTopAddBGSelectedById(id_){
    CT.collectionTopRemoveBGSelectedAll()
    document.querySelector(`[data-task-id="${id_} "]`).classList.add('active-tab')
  },
  collectionLeftFocusOnCollectionTabInput(id){
    document.querySelector(`[data-task="${id}"] input`).focus()
  },

  render () {
    say.m('CT.render()')

    if(CT.inputFocus == false){
      let collectionTabsHTML = []
      for(let i = 0; i < tabState.tasks.length; i++){
        let val = tabState.tasks[i].name
        if (val == null || val == 'null')
          val = ''
        let title = `<input placeholder="&#9679;&#9679;&#9679;" type="text" class="collectionTabInput" data-id="${tabState.tasks[i].id}" value="${val}" disabled="true">` || `<input type="text" placeholder="&#9679;&#9679;&#9679;" class="collectionTabInput" data-id="${tabState.tasks[i].id}" value="${val}"  disabled="true"> <svg width="23.9px" height="5.6px">23.9 5.6 <use xlink:href="icons/svg/miniature-controls.svg#ellipsis-big"></use></svg>`
        console.log('tabState.selectedTask', '!!!' + tabState.selectedTask + '!!!')

        collectionTabsHTML.push('<div class="collection-tab ' + ( tabState.selectedTask == tabState.tasks[i].id ? 'active-tab' : '' ) + '" data-task-id="' + tabState.tasks[i].id + ' " data-index="' + i + '">' + title + '</div>')
      }
      document.getElementById('collection-tabs').innerHTML = collectionTabsHTML.join('')

      if(document.querySelector('#task-overlay').getAttribute('hidden') == null)
        taskOverlay.show()
    }
  },

}
CT.start()