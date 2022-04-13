function headerComponent(container){ 
container.innerHTML = `
<a href="./index.html">
<img id="icon-logo" class="header__icon"src="./images/coding.png" alt="logo-icon" />
</a>
<img id="icon-menu" class="header__menu-icon"src="./images/menu.png" alt="logo-menu">
<nav class="menu-bar">
    <i class="menu-bar__close">X</i>
    <ul class="menu-bar__items">
        <li class="menu-bar__items-portfolio">
            <a href="./portfolio.html">Portfolio</a> 
        </li>
        <li class="menu-bar__items-services">
            <a href="./services.html">Services</a> 
        </li>
        <li class="menu-bar__items-contact">
            <a href="./contact.html">Contact</a> 
        </li>
    </ul>
</nav>
<nav class="header__menu">
    <ul class="header__menu__items">
        <li class="header__menu__items-home">
            <a href="./portfolio.html">Portofolio</a>
        </li>
        <li class="header__menu__items-services">
            <a href="./services.html">Services</a>
            </li>
            <li class="header__menu__items-contact">
                <a href="./contact.html">Contact</a>
            </li>
    </ul>
<nav>
`
const iconOpenEl = container.querySelector(".header__menu-icon");

const iconCloseEl = container.querySelector(".menu-bar__close");
const navEl = container.querySelector(".menu-bar");

iconOpenEl.addEventListener("click",()=>{
   navEl.style.display = "inherit";
})
iconCloseEl.addEventListener("click",()=>{
   navEl.style.display = "";
})
}