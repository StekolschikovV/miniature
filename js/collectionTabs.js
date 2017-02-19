function collectionTabs (){
    var collectionTabsContainer = document.getElementById('collection-tabs')
    var webpreviewContainer = document.getElementById('webpreview')
    var tabsContainer = document.getElementById('tabs')


    var btnSwitchTask = document.getElementById('switch-task-button')
    var taskOverlay = document.getElementById('task-overlay')


    taskOverlay.style.display = 'none'
    btnSwitchTask.click()
    btnSwitchTask.click()

    taskOverlay.style.display = 'block'

    collectionTabsContainer.addEventListener('click', function (e) {

        var taskId = e.target.dataset.taskId;
        var taskIndex = e.target.dataset.index;
        var tabId = tabState.tasks[taskIndex].tabs[0].id;
        var tab = document.querySelector('[data-tab="' + tabId + '"]')
        var tabActive = document.querySelector('.active-tab.collection-tab')
        e.target.classList.add('active-tab')

        tabActive.classList.remove('active-tab')
        tab.click();

    })

  var timeout

  tabsContainer.addEventListener('mouseover', function (e) {
       // var tabId = tabState.tasks[taskIndex].tabs[0].id;
      var url = e.target.parentNode.dataset.preview



      if (url) {
        timeout = setTimeout(function () {
          console.log(url)
          webpreviewContainer.style.backgroundImage = 'url('+url+')'
          webpreviewContainer.style.display = 'block'
        }, 400)


      }


    });


  tabsContainer.addEventListener('mouseleave', function (e) {
    webpreviewContainer.style.backgroundImage = ''
    webpreviewContainer.style.display = 'none'

    clearTimeout(timeout)
  });

    return {
        render: function () {
            var collectionTabsHTML = [];

            tasks.get().forEach(function( task, i ) {
                var title = task.name || 'Task ' + (i + 1);
                collectionTabsHTML.push('<div class="collection-tab ' + ( i == 0 ? 'active-tab' : '') + ' " data-task-id="' + task.id + ' " data-index="' + i + '">' + title + '</div>')
            })

            collectionTabsContainer.innerHTML = collectionTabsHTML.join('')
        }
    }


}
collectionTabs().render();