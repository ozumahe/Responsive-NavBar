const navBtn = document.getElementById("navBtn");
const navContainer = document.getElementById("nav-container");
const links = document.querySelector('.links');

navBtn.addEventListener('click', ()=> {
    const navContainerHeight = navContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;

    if(navContainerHeight === 0){
        navContainer.style.height = `${linksHeight + 30}px`;

    } else {
        navContainer.style.height = 0;

    }


    const isBar = navBtn.classList.contains("fa-bars");
    if(isBar){
        navBtn.classList.remove("fa-bars");
        navBtn.classList.add("fa-times");
    } else {
        navBtn.classList.add("fa-bars");
        navBtn.classList.remove("fa-times");

    }

});

window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
});