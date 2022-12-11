const createModal = (parentSelector, nameModal="login") => {
    const modal = document.querySelector(parentSelector);

    const createText = (nameTitle, nameBtn, nameLink) => {
        modal.firstElementChild.innerHTML = `
            <div class="modal__content fadeIn">
                <form class="modal__form" action="#">
                    <div class="modal__close-wrapper">
                        <div data-close class="modal__close" data-close>&times;</div>
                    </div>
                    <div class="modal__title">${nameTitle}</div>
                    <input required placeholder="Name" name="name" type="text" class="modal__input">
                    <input required placeholder="Password" name="phone" type="phone" class="modal__input">
                    <button class="modal__btn">${nameBtn}</button>
                </form>
                <a class="modal__link">${nameLink}</a>
            </div>
        `;
    };

    if (nameModal === "login") {
        createText("Login", "Log in", "Sign Up");
        modal.classList.remove("modal__transition_login");
        modal.classList.add("modal__transition_signup");
    } else {
        createText("Signup", "Sign up", "Log In");
        modal.classList.remove("modal__transition_signup");
        modal.classList.add("modal__transition_login");
    }
};

//Переход между модальными окнами
const transitionModal = (parentSelector) => {
    const modal = document.querySelector(parentSelector);

    modal.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("modal__link") && e.target.closest(".modal__transition_signup")) {
            createModal(parentSelector, "signup");
        } else if (e.target.classList.contains("modal__link") && e.target.closest(".modal__transition_login")){
            createModal(parentSelector, "login");   
        }
    });
};

const openModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);  
    modal.classList.toggle('modal_show'); 
    document.body.style.overflow = 'hidden'; 
};

const closeModal = (modalSelector) => {
    const modal = document.querySelector(modalSelector);
    modal.firstElementChild.firstElementChild.classList.remove("fadeIn");
    modal.firstElementChild.firstElementChild.classList.add("fadeOut");
    setTimeout(() => {
        modal.classList.toggle('modal_show');
        document.body.style.overflow = ''; 

    }, 450); //450 вместо 500, чтобы анимация не лагала
};

const modal = (modalTrigger, modalSelector) => {
    const modalTrig = document.querySelector(modalTrigger),
        modal = document.querySelector(modalSelector);

    modalTrig.addEventListener("click", () => {
        createModal(modalSelector); 
        openModal(modalSelector);
        transitionModal(modalSelector);
    });

    modal.addEventListener('click', (e) => {  //при нажатии на пустоту и крестик, модальное окно закрывается
        if (e.target === modal || e.target.getAttribute('data-close') == '') { 
            closeModal(modalSelector); 
        }
    });

    document.addEventListener('keydown', e => { //закрытие модального окна при нажатии клавиш
        if (e.code === "Escape" && modal.classList.contains('modal_show')) { 
            closeModal(modalSelector);
        }
    });
};

modal(".nav-panel__login-button",".modal");

