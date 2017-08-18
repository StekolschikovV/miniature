function collectionTabs (){
    let collectionTabsContainer = document.getElementById('collection-tabs')
    let webpreviewContainer = document.getElementById('webpreview')
    let tabsContainer = document.getElementById('tabs')


    let btnSwitchTask = document.getElementById('switch-task-button')
    let taskOverlay = document.getElementById('task-overlay')


    taskOverlay.style.display = 'none'
    btnSwitchTask.click()
    btnSwitchTask.click()
    taskOverlay.style.display = 'block'

    collectionTabsContainer.addEventListener('click', function (e) {

        let taskId = e.target.dataset.taskId;
        let taskIndex = e.target.dataset.index;
        let tabId = tabState.tasks[taskIndex].tabs[0].id;
        let tab = document.querySelector('[data-tab="' + tabId + '"]')
        let tabActive = document.querySelector('.active-tab.collection-tab')
        e.target.classList.add('active-tab')
        tabActive.classList.remove('active-tab')
        tab.click()


    })
    

    return {
        render: function () {

            let collectionTabsHTML = [];

            tasks.get().forEach(function( task, i ) {
                // let title = task.name || 'Collection ' + (i + 1);
                let title = task.name || '<svg width="23.9px" height="5.6px">23.9 5.6 <use xlink:href="icons/svg/miniature-controls.svg#ellipsis-big"></use></svg>';
                collectionTabsHTML.push('<div class="collection-tab ' + ( i == 0 ? 'active-tab' : '') + ' " data-task-id="' + task.id + ' " data-index="' + i + '">' + title + '</div>')
            })

            collectionTabsContainer.innerHTML = collectionTabsHTML.join('')

          eventEmitter.emit('collectionTabsRender')
          console.warn("eventEmitter", "collectionTabsRender")
        }
    }


}

collectionTabs().render();