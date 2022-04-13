function footerComponent(container){
container.innerHTML = `
<img class="footer__icon"src="./images/coding.png" alt="logo-icon">
        <ul class="footer__redes">
            <li>
                <a class="footer__redes-github" href="">GitHub</a>
                <img class="footer__redes-github-icon" src="./images/github.png" alt="">
            </li>
            <li>
                <a class="footer__redes-linkedin" href="">Linkedin</a>
                <img class="footer__redes-linkedin-icon" src="./images/linkedin.png" alt="">
            </li>
            <li>
                <a class="footer__redes-instagram" href="">Instagram</a>
                <img class="footer__redes-instagram-icon" src="./images/instagram.png" alt="">
            </li>
        </ul>
`
}