
(function() {
    let navbar = document.getElementById('navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakpoint = main.offsetTop - navbarHeight; 

    let windowPos;
    let isFixed  = false;
    function updatePos() {
        windowPos = window.scrollY;
    }

    function onScroll() {

        updatePos()

        if(windowPos >= breakpoint && !isFixed) {
            navbar.classList.remove('open');

            navbar.classList.add('navbar-fixed');
            main.style.cssText = "margin-top: " + navbarHeight + "px";
            isFixed = true;
        } else if (windowPos < breakpoint && isFixed) {
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = "margin-top: " + 0;
        }
    }
    document.addEventListener('scroll', onScroll);
})();
(function() {
    let navbar = document.getElementById('navbar');
    let hamburguer = document.getElementById('hamburguer')
    hamburguer.addEventListener('click', ()=>{
        navbar.classList.toggle('open');
    });
})();