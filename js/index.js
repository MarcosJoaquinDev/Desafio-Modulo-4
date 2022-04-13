function loadWelcomeContent(){
    fetch("https://cdn.contentful.com/spaces/7mgdeu24hpc1/environments/master/entries?access_token=BolTe0yKbv8JrxxaZ7J8CquUe1lOc_iVyIX6TWGRyaQ&content_type=welcome")
    .then(res => res.json() )
    .then( obj =>{
        const title = obj.items[0].fields.title;
        const text = obj.items[0].fields.description.content[0].content[0].value;
        const welcomeTitleEl = document.querySelector(".main__hero__welcome-title");
        const welcomeParagrahEl = document.querySelector(".main__hero__welcome-text");
        welcomeTitleEl.textContent = title;
        welcomeParagrahEl.textContent = text;
    })
    fetch("https://cdn.contentful.com/spaces/7mgdeu24hpc1/environments/master/entries?access_token=BolTe0yKbv8JrxxaZ7J8CquUe1lOc_iVyIX6TWGRyaQ&content_type=aboutMe")
    .then(res => res.json() )
    .then( obj =>{
        console.log(obj);
        const aboutMeTitleEl = document.querySelector(".about-me__title");
        const aboutMeDescriptionEl = document.querySelector(".about-me__text");
        aboutMeTitleEl.textContent = obj.items[0].fields.title;
        aboutMeDescriptionEl.textContent = obj.items[0].fields.description.content[0].content[0].value;
    })
}
function main(){
    const containerHeader = document.querySelector(".header");
    headerComponent(containerHeader);
    const containerFooter = document.querySelector(".footer");
    footerComponent(containerFooter);
    const containerContact = document.querySelector(".contact");
    contactComponent(containerContact);
    loadWelcomeContent();
}
main();