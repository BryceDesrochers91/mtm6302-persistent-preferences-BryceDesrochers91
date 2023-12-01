$list = document.getElementById('list')
$theme = document.getElementById('theme')
$preferencesPanel = document.getElementById('preferencesPanel')
$form = document.getElementById('form')


let preferences = [
    'Black',
    'White',
    'Red',
    'Green',
    'Blue'

]

function buildPersistentPreferences(){

const html = []

for( let i=0; i < preferences.length; i++){
    html.push(`<li class="list-group-item">${preferences[i]}<button class="btn btn-danger">Delete</button></li>`)
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
    // tasks.splice(e.target.dataset.index, 1)
    // buildPersistentPreferences()
    // localStorage.setItem('preferences', JSON.stringify())
})

if(localStorage.getItem('preferences')){
    tasks = JSON.parse(localStorage.getItem(tasks))
}
buildPersistentPreferences()

  
  themeSelect.addEventListener('change', function () {
    
    const selectedTheme = themeSelect.value;
    document.body.className = selectedTheme;

    localStorage.setItem('theme', selectedTheme);
    
    populateItemList(selectedTheme);
})

buildPersistentPreferences()
function populateItemList(){

}