function contactComponent(container){
 container.innerHTML = `
 <h2 class="contact__title">Escribime</h2>
        <form class="contact__form"action="">
            <label  class="contact__form__label-name"for="">
                <span class="contact__form__label-name-title" >NOMBRE</span>
                <input class="contact__form__label-name-input" name="name" type="text">
            </label>
            <label  class="contact__form__label-email" for="">
                <span class="contact__form__label-email-title" >EMAIL</span>
                <input class="contact__form__label-email-input" name="email" type="text">
            </label>
            <label  class="contact__form__label-message"for="">
                <span class="contact__form__label-message-title" >MENSAJE</span>
                <textarea class="contact__form__label-message-text" name="message" id="" ></textarea>
            </label>
            <button class="contact__form__button">Enviar</button>
        </form>
 `
}