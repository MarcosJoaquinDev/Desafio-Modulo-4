function addWorkPortfolio(params){
        const template = document.querySelector("#portfolio__article-template");
        const container = document.querySelector(".portfolio");
        template.content.querySelector(".portfolio__articles__work-image").src = params.urlImage;
        template.content.querySelector(".portfolio__articles__work-title").textContent = params.title;
        template.content.querySelector(".portfolio__articles__work-description").textContent = params.description;
        template.content.querySelector(".portfolio__articles__work-link").href = params.urlWork;
        template.content.querySelector(".portfolio__articles__work-link").target = "_black";
        const workArticle = document.importNode(template.content, true);
        container.appendChild(workArticle);
}
function getPortfolioFromContenful(){
    fetch("https://cdn.contentful.com/spaces/7mgdeu24hpc1/environments/master/entries?access_token=BolTe0yKbv8JrxxaZ7J8CquUe1lOc_iVyIX6TWGRyaQ&content_type=portfolio")
    .then( (res) => res.json())
    .then( res =>{
            for (const item of res.items) {
                const title  = item.fields.title;
                const description = item.fields.description.content[0].content[0].value;
                const urlPortfolio = item.fields.urlPortfolio;
                const idImg = item.fields.imagePortfolio.sys.id;
                const urlImage = idIdentify(idImg);
                const objParams = {
                    title : title,
                    description :description,
                    urlWork : urlPortfolio,
                    urlImage : urlImage,
                }
                addWorkPortfolio(objParams);
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
    const footerEl = document.querySelector(".footer");
    headerComponent(headerEl);
    footerComponent(footerEl);
    getPortfolioFromContenful();
}

main();