const navBox = document.querySelector('nav')

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    
    if(window.scrollY > 100) {
        navBox.classList.add('smoothly')
    }
    else navBox.classList.remove('smoothly')
})