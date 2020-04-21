/*------------------------------------*\
    JavaScript
\*------------------------------------*/

/**
 * #IMPORTS IMAGES
 */

import "./styles/main.scss";
import "./static/img/visla_black.svg";
import "./static/img/web.svg";
import "./static/img/mobile.svg";
import "./static/img/ai.svg";
import "./static/img/ux.svg";
import "./static/img/card_image_1.jpg";
import "./static/img/card_image_2.jpg";
import "./static/img/testimonial_avatar_1.jpg";
import "./static/img/testimonial_avatar_2.jpg";
import "./static/img/testimonial_avatar_3.jpg";
import "./static/img/star_full.svg";
import "./static/img/star_half.svg";
import "./static/img/clutch_logo.png";
import "./static/img/aerlingus.png";
import "./static/img/collective.png";
import "./static/img/creatix_logo.png";
import "./static/img/lamillou.png";
import "./static/img/1043.png";
import "./static/img/AptAppLogoDark.png";
import "./static/img/honeyaccess.png";
import "./static/img/Kerosine.png";
import "./static/img/socialwave.png";
import "./static/img/sharerocket.png";
import "./static/img/BiosphereGPS.png";
import "./static/img/BHAssociates.png";
import "./static/img/deToekomst.png";
import "./static/img/Acram.png";
import "./static/img/CampsAustraliaWide.png";
import "./static/img/addedIQ.png";
import "./static/img/NarrowGauge.png";
import "./static/img/TruffleberryMarket.png";
import "./static/img/Hygen.png";
import "./static/img/Neophotonics.png";
import "./static/img/fb.svg";
import "./static/img/twitter.svg";
import "./static/img/linkedin.svg";
import "./static/img/dribbble.svg";
import "./static/img/be.svg";

/**
 * #CODE
 */

/**
 * HEADER
 */

var navigationItems = [
  "Nuestro Trabajo",
  "Servicios",
  "Calidad",
  "Artículos",
  "Nosotros",
];

let itemText = document.querySelectorAll(".c-navigation__items li a");

navigationItems.forEach((el, pos) => {
  itemText[pos].innerHTML = el;
});

let posPrincipal = window.pageYOffset;

window.onscroll = function () {
  let posActual = window.pageYOffset;

  let navigationMenu = document.querySelector("header nav.c-navigation");
  let navigationMenuMobile = document.querySelector(
    "header nav.c-navigation-mobile"
  );

  if (posPrincipal >= posActual) {
    navigationMenu.style.top = "0";
    navigationMenu.style.boxShadow = "0 5px 15px rgba(1,33,51,.1)";

    navigationMenuMobile.style.top = "0";
    navigationMenuMobile.style.boxShadow = "0 5px 15px rgba(1,33,51,.1)";
  } else {
    navigationMenu.style.top = "-100px";
    navigationMenuMobile.style.top = "-100px";
  }

  posPrincipal = posActual;

  if (posPrincipal == 0 && posActual == 0) {
    navigationMenu.style.boxShadow = "0 0 0 #fff";
    navigationMenuMobile.style.boxShadow = "0 0 0 #fff";
  }
};

/**
 * END HEADER
 */

/**
 * HEADER MOBILE MENU
 */

let boxButton = document.querySelector(
  "nav.c-navigation-mobile .c-navigation-mobile__button button"
);

boxButton.addEventListener("click", () => {
  let mobileButton = document.querySelector(
    "nav.c-navigation-mobile .c-navigation-mobile__button"
  );
  let mobileNavigation = document.querySelector(
    "nav.c-navigation-mobile .c-navigation-mobile__items"
  );
  let fullWrapper = document.querySelector("body .full-wrapper");
  let mobileOverlay = document.querySelector(
    "nav.c-navigation-mobile .c-navigation-mobile__overlay"
  );

  //Button Transition
  mobileButton.classList.toggle("c-navigation-mobile__button--active");

  //Show Menu Active
  mobileNavigation.classList.toggle("c-navigation-mobile__items--active");

  //Overlay
  mobileOverlay.classList.toggle("c-navigation-mobile__overlay--active");

  //Close Menu
  mobileOverlay.addEventListener("click", () => {
    //Initial Position Button
    mobileButton.classList.remove("c-navigation-mobile__button--active");

    //Remove Active Menu
    mobileNavigation.classList.remove("c-navigation-mobile__items--active");

    //Remove Overlay
    mobileOverlay.classList.remove("c-navigation-mobile__overlay--active");
  });
});

/**
 * END HEADER MOBILE MENU
 */

/**
 * MAIN SECTION
 */

var titleOptions = [
  "Digitalización centrada en personas",
  "Human-centered software development",
  "Diseño Digital centrado en las personas",
];

let mainTitle = document.querySelectorAll(".main__title h1");
mainTitle[0].innerHTML = titleOptions[0];

let mainParagraph = document.querySelectorAll(".main__title h2");
mainParagraph[0].innerHTML =
  'Ingeniería de software a medida.  <span><a href="#">Saber más</a> </span>';

let cardItem = document.querySelectorAll(".c-card a");

//Gray Background Transition
cardItem.forEach((el, pos) => {
  cardItem[pos].addEventListener("mouseenter", (e) => {
    cardItem[pos].style.background = "#eff3f5";
    cardItem[pos].style.transition = ".1s background-color ease-out";
  });

  cardItem[pos].addEventListener("mouseleave", (e) => {
    cardItem[pos].style.background = "#fff";
    cardItem[pos].style.transition = ".7s background-color ease-out";
  });
});

/**
 * END MAIN SECTION
 */

/**
 * CARDS SECTION
 */

function Card(tag, title, text) {
  this.tag = tag;
  this.title = title;
  this.text = text;
}

//Blue Card Component
var blueCard = new Card(
  "Analítica",
  "Métricas Retail",
  "4000 sensores de inteligencia artificial en todo el mundo, que recolectan señales de Wi-Fi y Bluetooth de teléfonos inteligentes, entregando más de <b>10GB</b> de datos al día."
);

let tagBlueCard = document.querySelector(
  ".c-card-image--blue .c-card-image__bottom p:first-child"
);
tagBlueCard.innerHTML = blueCard.tag;

let titleBlueCard = document.querySelector(
  ".c-card-image--blue .c-card-image__bottom h4"
);
titleBlueCard.innerHTML = blueCard.title;

let textBlueCard = document.querySelector(
  ".c-card-image--blue .c-card-image__bottom p:last-child"
);
textBlueCard.innerHTML = blueCard.text;

//Green Card Component
var greenCard = new Card(
  "Viajes y Estilo de Vida",
  "Mapas de Vida Silvestre y Medio Ambiente",
  "Una aplicación que conecta a los entusiastas del ejercicio al aire libre ofreciendo contenido de calidad mientras hace senderismo."
);

let tagGreenCard = document.querySelector(
  ".c-card-image--green .c-card-image__bottom p:first-child"
);
tagGreenCard.innerHTML = greenCard.tag;

let titleGreenCard = document.querySelector(
  ".c-card-image--green .c-card-image__bottom h4"
);
titleGreenCard.innerHTML = greenCard.title;

let textGreenCard = document.querySelector(
  ".c-card-image--green .c-card-image__bottom p:last-child"
);
textGreenCard.innerHTML = greenCard.text;

/**
 * END CARDS SECTION
 */

/**
 * TESTIMONIALS SECTION
 */

function testimonial(name, role, company, opinion) {
  this.name = name;
  this.role = role;
  this.company = company;
  this.opinion = opinion;
}

//Testimonial #1
var testimonial1 = new testimonial(
  "Andres Marvo",
  "Fundador, ",
  "Creatix",
  "Visla crea un código increíblemente de alta calidad, asumiendo la responsabilidad personal de su trabajo. Son innovadores y eficientes, y manejan bien los requisitos cambiantes."
);

let nameFirstTestimonial = document.querySelectorAll(
  ".c-testimonials .c-testimonials__personal p:first-child"
);
nameFirstTestimonial[0].innerHTML = testimonial1.name;

let roleFirstTestimonial = document.querySelectorAll(
  ".c-testimonials .c-testimonials__personal p:last-child"
);
roleFirstTestimonial[0].innerHTML =
  testimonial1.role + `<a href="#">${testimonial1.company}</a>`;

let companyFirstTestimonial = document.querySelectorAll(
  ".c-testimonials .c-testimonials__personal p:last-child a"
);

let opinionFirstTestimonial = document.querySelectorAll(
  ".c-testimonials .c-testimonials__text p"
);
opinionFirstTestimonial[0].innerHTML = testimonial1.opinion;

//Testimonial #2
var testimonial2 = new testimonial(
  "Elisa Paredes",
  "CEO, ",
  "Acram",
  "Las tasas de conversión crecieron drásticamente en los primeros meses gracias a una experiencia del cliente más optimizada y un diseño visualmente atractivo. VISLA es un equipo talentoso y competente. Su astuta comprensión de la identidad de marca y los objetivos de la empresa contribuye directamente a resultados intuitivos y funcionales."
);

let nameSecondTestimonial = document.querySelectorAll(
  ".c-testimonials .c-testimonials__personal p:first-child"
);
nameSecondTestimonial[1].innerHTML = testimonial2.name;

let roleSecondTestimonial = document.querySelectorAll(
  ".c-testimonials .c-testimonials__personal p:last-child"
);
roleSecondTestimonial[1].innerHTML =
  testimonial2.role + `<a href="#">${testimonial2.company}</a>`;

let companySecondTestimonial = document.querySelectorAll(
  ".c-testimonials .c-testimonials__personal p:last-child a"
);

let opinionSecondTestimonial = document.querySelectorAll(
  ".c-testimonials .c-testimonials__text p"
);
opinionSecondTestimonial[1].innerHTML = testimonial2.opinion;

//Testimonial #3
var testimonial3 = new testimonial(
  "Mark Hoppus",
  "Marketing Lead, ",
  "Kerosine",
  "Responsivo y complaciente, Visla proporciona trabajo de alta calidad y un flujo de trabajo flexible. La experiencia en UI / UX y desarrollo de aplicaciones los convierte en un socio ideal. Los comentarios de lanzamiento suave de la aplicación son abrumadoramente positivos."
);

let nameThirdTestimonial = document.querySelectorAll(
  ".c-testimonials .c-testimonials__personal p:first-child"
);
nameThirdTestimonial[2].innerHTML = testimonial3.name;

let roleThirdTestimonial = document.querySelectorAll(
  ".c-testimonials .c-testimonials__personal p:last-child"
);
roleThirdTestimonial[2].innerHTML =
  testimonial3.role + `<a href="#">${testimonial3.company}</a>`;

let companyThirdTestimonial = document.querySelectorAll(
  ".c-testimonials .c-testimonials__personal p:last-child a"
);

let opinionThirdTestimonial = document.querySelectorAll(
  ".c-testimonials .c-testimonials__text p"
);
opinionSecondTestimonial[2].innerHTML = testimonial3.opinion;

/**
 * END TESTIMONIALS SECTION
 */

/**
 * PARTNERS SECTION
 */

let titlePartners = document.querySelector(
  ".partners .partners__wrapper .partners__title h2"
);
titlePartners.innerHTML = "Con la confianza de:";

/**
 * END PARTNERS SECTION
 */

/**
 * CTA SECTION
 */

let textCTA = document.querySelector(".cta .cta__wrapper h4");
textCTA.innerHTML =
  "Con un enfoque en la confiabilidad, desarrollamos <span>productos móviles y web multiplataforma</span> para fomentar el crecimiento de su negocio.";

/**
 * END CTA SECTION
 */

/**
 * LETS CODE SECTION
 */

let bigTitleCode = document.querySelector(".lets-code .lets-code__wrapper h2");
bigTitleCode.innerHTML = "A Codear!";

let textCode = document.querySelector(".lets-code .lets-code__wrapper p");
textCode.innerHTML = "Qué podemos construir para ti hoy?";

/**
 * END LETS CODE SECTION
 */

/**
 * FOOTER
 */

//Footer Contact
let titleFooterContact = document.querySelector(
  "footer .footer__wrapper .footer__contact h3"
);
titleFooterContact.innerHTML = "Algún proyecto?";

let emailText = document.querySelector(
  "footer .footer__wrapper .footer__contact p"
);
emailText.innerHTML = "O envíanos un correo a:";

//Footer Navigation
var menuFooter = [
  "Inicio",
  "Nuestro Trabajo",
  "Servicios",
  "Calidad",
  "Artículos",
  "Nosotros",
  "Carreras",
  "Contácto",
];

let menuList = document.querySelectorAll(
  "footer .footer__wrapper .footer__menu .footer__list:first-child ul li a"
);

menuFooter.forEach((el, pos) => {
  menuList[pos].innerHTML = el;
});

var servicesFooter = [
  "Aplicaciones Móviles",
  "Desarrollo Web",
  "Diseño UX/UI",
  "Inteligencia Artificial",
];

let servicesList = document.querySelectorAll(
  "footer .footer__wrapper .footer__menu .footer__list:nth-child(2) ul li a"
);

servicesFooter.forEach((el, pos) => {
  servicesList[pos].innerHTML = el;
});

//Footer Stack
var stackFooter = [
  "iOS",
  "Android",
  "React Native",
  "Node.js",
  "Vue.js",
  "Ruby on Rails",
];

let stackList = document.querySelectorAll(
  "footer .footer__wrapper .footer__menu .footer__list:last-child ul li a"
);

stackFooter.forEach((el, pos) => {
  stackList[pos].innerHTML = el;
});

/**
 * END FOOTER
 */
