class MenuCard {
    constructor(src, alt, title, parentSelector, ...classesCard) { 
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.parent = document.querySelector(parentSelector);
        this.classes = classesCard;
    }

    render() {
        const element = document.createElement('div');
        this.classes.forEach(className => element.classList.add(className)); 


        element.innerHTML = `
            <h2 class="card__title">${this.title}</h2>
            <img src=${this.src} alt=${this.alt} class="card__img">
        `;
        this.parent.append(element);
    }
}

new MenuCard(
    "img/genres/indie.webp",
    "indie",
    "Indie",
    ".genres__wrapper",
    "card",
    "card__gradient-indie"
).render();

new MenuCard(
    "img/genres/hip-hop.jpg",
    "hip-hop",
    "Hip-Hop",
    ".genres__wrapper",
    "card",
    "card__gradient-hip-hop"
).render();

new MenuCard(
    "img/genres/pop.webp",
    "pop",
    "Pop",
    ".genres__wrapper",
    "card",
    "card__gradient-pop"
).render();

new MenuCard(
    "img/genres/rock.jpg",
    "rock",
    "Rock",
    ".genres__wrapper",
    "card",
    "card__gradient-rock"
).render();

new MenuCard(
    "img/genres/metal.jpeg",
    "metal",
    "Metal",
    ".genres__wrapper",
    "card",
    "card__gradient-metal"
).render();

new MenuCard(
    "img/genres/classical.jpg",
    "classical",
    "Classical",
    ".genres__wrapper",
    "card",
    "card__gradient-classical"
).render();

new MenuCard(
    "img/genres/jazz.webp",
    "jazz",
    "Jazz",
    ".genres__wrapper",
    "card",
    "card__gradient-jazz"
).render();

new MenuCard(
    "img/genres/blues.jpg",
    "blues",
    "Blues",
    ".genres__wrapper",
    "card",
    "card__gradient-blues"
).render();

