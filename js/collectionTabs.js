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
        tab.click();

    })
    

    return {
        render: function () {
            let collectionTabsHTML = [];

            tasks.get().forEach(function( task, i ) {
                let title = task.name || 'Task ' + (i + 1);
                collectionTabsHTML.push('<div class="collection-tab ' + ( i == 0 ? 'active-tab' : '') + ' " data-task-id="' + task.id + ' " data-index="' + i + '">' + title + '</div>')
            })

            collectionTabsContainer.innerHTML = collectionTabsHTML.join('')
        }
    }


}

collectionTabs().render();