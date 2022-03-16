const btnEl = document.querySelector('.toggle-btn');
const navEl = document.querySelector('.nav-menu-list');

btnEl.addEventListener("click", ()=>{
    const visibility = navEl.getAttribute('data-visible')

    if(visibility == "false"){
        navEl.setAttribute('data-visible', true)
        btnEl.setAttribute('aria-expanded', true)
    }
    else{
        navEl.setAttribute('data-visible', false)
        btnEl.setAttribute('aria-expanded', false)
    }
})
