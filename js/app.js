const btnMenu = document.querySelector('.trigger'),
    menuClass = document.querySelector('nav')

btnMenu.addEventListener('click', ()=>{
    menuClass.classList.toggle('showmenu')
})

