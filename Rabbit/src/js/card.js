class MenuCard {
    constructor(href, src, alt, title, parentSelector, ...classesCard) { 
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.parent = document.querySelector(parentSelector);
        this.classes = classesCard;
        this.href = href;
    }

    render() {
        const element = document.createElement('a');
        this.classes.forEach(className => element.classList.add(className)); 
        element.href = this.href;

        element.innerHTML = `
            <h2 class="card__title">${this.title}</h2>
            <img src=${this.src} alt=${this.alt} class="card__img">
        `;
        this.parent.append(element);
    }
}

new MenuCard(
    "../genres/indie.html",
    "../../img/genres/indie.webp",
    "indie",
    "Indie",
    ".genres__wrapper",
    "card",
    "card_gradient-indie",
    "genres__card"
).render();

new MenuCard(
    "../genres/indie.html",
    "../../img/genres/hip-hop.jpg",
    "hip-hop",
    "Hip-Hop",
    ".genres__wrapper",
    "card",
    "card_gradient-hip-hop",
    "genres__card"
).render();

new MenuCard(
    "../genres/indie.html",
    "../../img/genres/pop.webp",
    "pop",
    "Pop",
    ".genres__wrapper",
    "card",
    "card_gradient-pop",
    "genres__card"
).render();

new MenuCard(
    "../genres/indie.html",
    "../../img/genres/rock.jpg",
    "rock",
    "Rock",
    ".genres__wrapper",
    "card",
    "card_gradient-rock",
    "genres__card"
).render();

new MenuCard(
    "../genres/indie.html",
    "../../img/genres/metal.jpeg",
    "metal",
    "Metal",
    ".genres__wrapper",
    "card",
    "card_gradient-metal",
    "genres__card"
).render();

new MenuCard(
    "../genres/indie.html",
    "../../img/genres/classical.jpg",
    "classical",
    "Classical",
    ".genres__wrapper",
    "card",
    "card_gradient-classical",
    "genres__card"
).render();

new MenuCard(
    "../genres/indie.html",
    "../../img/genres/jazz.webp",
    "jazz",
    "Jazz",
    ".genres__wrapper",
    "card",
    "card_gradient-jazz",
    "genres__card"
).render();

new MenuCard(
    "html/genres/indie.html",
    "../../img/genres/blues.jpg",
    "blues",
    "Blues",
    ".genres__wrapper",
    "card",
    "card_gradient-blues",
    "genres__card"
).render();


