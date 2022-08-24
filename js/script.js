function burgerMenuClick(){
    const burgerMenu = document.querySelector(".burgerMenu");
    burgerMenu.style.display = "block";
}

function burgerMenuExitClick(){
    const burgerMenu = document.querySelector(".burgerMenu");
    burgerMenu.style.display = "none";
}

const links = document.querySelectorAll('a[data-goto]');
if(links.length > 0){
    links.forEach(link => {
        link.addEventListener("click", onLinkClick)
    });

    function onLinkClick(e){
        const targetLink = e.target;

        if(targetLink.dataset.goto && document.querySelector(targetLink.dataset.goto)){
            const gotoBlock = document.querySelector(targetLink.dataset.goto),
                  gotoBlockValue = gotoBlock.getBoundingClientRect().top+pageYOffset-document.querySelector('header').offsetHeight;
            
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });

            e.preventDefault();
        }
    }
}