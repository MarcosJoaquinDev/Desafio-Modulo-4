function addCardServices(params){
    const template = document.querySelector("#services__work__item-template");
    const container = document.querySelector(".services__work");
    template.content.querySelector(".services__work__item-image").src = params.urlImage;
    template.content.querySelector(".services__work__item-title").textContent = params.title;
    template.content.querySelector(".services__work__item-text").textContent = params.description;
    const workArticle = document.importNode(template.content, true);
    container.appendChild(workArticle);
}
function getServicesFromContenful(){
    fetch("https://cdn.contentful.com/spaces/7mgdeu24hpc1/environments/master/entries?access_token=BolTe0yKbv8JrxxaZ7J8CquUe1lOc_iVyIX6TWGRyaQ&content_type=services")
    .then( (res) => res.json())
    .then( res =>{
        for (const item of res.items) {
            const title  = item.fields.title;
            const description = item.fields.description.content[0].content[0].value;
            const idImg = item.fields.imageServices.sys.id;
            const urlImg = idIdentify(idImg);    
            addCardServices({
                title:title,
                description:description,
                urlImage : urlImg,
            }); 
        }
        function idIdentify (id){
            for (const item of res.includes.Asset ) {
                 const idItem =  item.sys.id;
                     if(id==idItem){
                     return item.fields.file.url;
                     }
            }
         }
    })
}

function main(){
    const headerEl = document.querySelector(".header");
    headerComponent(headerEl);
    const footerEl = document.querySelector(".footer");
    footerComponent(footerEl);
    getServicesFromContenful();
}    
main();