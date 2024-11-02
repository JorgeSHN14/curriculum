(function() {
    let navbar = document.getElementById('navbar');
    let hamburguer = document.getElementById('hamburguer')
    hamburguer.addEventListener('click', ()=>{
        navbar.classList.toggle('open');
    });
})()