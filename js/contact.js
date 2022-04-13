function pushFormInformation(){
    const formEl = document.querySelector(".contact__form");
    formEl.addEventListener("submit",(e)=>{
        e.preventDefault();
        const form = e.target;
        const nameInput = form.querySelector(".contact__form__label-name-input").value;
        const emailInput = form.querySelector(".contact__form__label-email-input").value;
        const messageInput = form.querySelector(".contact__form__label-message-text").value;
        const dataPost = {
            "to":"marcosjuako@hotmail.com",
            "message": `Nombre: ${nameInput}, Email: ${emailInput}, Mensaje: ${messageInput}.`
        }

        fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(dataPost),
      })
      .then((data)=> data.json());
    })
}

function main(){
const headerEl = document.querySelector(".header");
const contactEl = document.querySelector(".contact");
const footerEl = document.querySelector(".footer");
headerComponent(headerEl);
contactComponent(contactEl);
footerComponent(footerEl);
pushFormInformation();
}

main();