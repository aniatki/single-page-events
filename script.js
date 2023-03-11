const h2Elems = document.querySelectorAll('h2') // Select all elements which the class name can be applied to

h2Elems.forEach(tag => tag.addEventListener('click', onClickClassToggle)) // Loop through them and add click events

function onClickClassToggle(e) {
    let target = e.target
    if (target.classList.value != 'active') target.classList.add('active') 
    // check if clicked element doesn't have the class name already, if so add it
    document.addEventListener('click', (ev) => { 
        // add another event listener to the document itself, 
        // if the currently clicked item doesn't match the previously clicked item, 
        // the class name will be removed
        if (ev.target != target) target.classList.remove('active') 
    })
}