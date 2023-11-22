$list = document.getElementById('list')
$theme = document.getElementById('theme')
$preferencesPanel = document.getElementById('preferencesPanel')



let preferences = [
    'Buy Dinner',
    'Completes assignment',
    'review class'

]

function buildToDoList(){

const html = []

for( let i=0; i < tasks.length; i++){
    html.push(`<li class="list-group-item">${tasks[i]}<button class="btn btn-danger">Delete</button></li>`)
}
    $list.innerHTML = html.join('')

}

// buildToDoList()

$form.addEventListener('submit', function(e){
    e.preventDefault()

    tasks.push($newTask.value)
    $newTask.value = ''
    buildPersistentPreferences()
})

$list.addEventListener('click', function(e){
    console.log(e.target)

    if (e.target.classList.contains('btn')) {
        
    }
    tasks.splice(e.target.dataset.index, 1)
    buildPersistentPreferences()
    localStorage.setItem('tasks', JSON.stringify(tasks))
})

if(localStorage.getItem('tasks')){
    tasks = JSON.parse(localStorage.getItem(tasks))
}
buildPersistentPreferences()