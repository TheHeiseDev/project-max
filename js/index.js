let isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    },
  },
  body = document.querySelector("body");
if (isMobile.any()) {
  body.classList.add("touch");
  const e = document.querySelectorAll(".arrow");
  for (i = 0; i < e.length; i++) {
    const t = e[i].previousElementSibling,
      o = e[i].nextElementSibling,
      r = e[i];
    t.classList.add("parent"),
      e[i].addEventListener("click", function () {
        o.classList.toggle("open"), r.classList.toggle("active");
      });
  }
} else body.classList.add("mouse");
const burger = document.querySelector(".header__burger"),
  menu = document.querySelector(".header__menu"),
  menuAction = document.querySelector(".header__action"),
  cartMobile = document.querySelector(".cart__mobile"),
  bodyy = document.body,
  mainWidth = bodyy.clientWidth;
function menuFunc() {
  burger.classList.toggle("active"),
    menu.classList.toggle("active"),
    bodyy.classList.toggle("active"),
    menuAction.classList.toggle("active"),
    cartMobile.classList.toggle("active");
}
burger.addEventListener("click", menuFunc),
  window.addEventListener("resize", function (e) {
    e.currentTarget.outerWidth > 767 &&
      (burger.classList.remove("active"),
      menu.classList.remove("active"),
      bodyy.classList.remove("active"),
      menuAction.classList.remove("active"),
      cartMobile.classList.remove("active"));
  });
const links = Array.from(menu.children);
function closeOnClick() {
  burger.classList.remove("active"),
    menu.classList.remove("active"),
    bodyy.classList.remove("active"),
    menuAction.classList.remove("active"),
    cartMobile.classList.remove("active");
}
links.forEach((e) => {
  e.addEventListener("click", closeOnClick);
});
const input = document.querySelectorAll(".inp");
input.forEach((e) => {
  (e.onfocus = function () {
    e.previousElementSibling.style.color = "blue";
  }),
    (e.onblur = function () {
      e.previousElementSibling.style.color = "";
    });
});
const popupHendler = document.getElementById("open-popup"),
  popup = document.querySelector(".popup"),
  bodyBlock = document.body,
  closePopup = document.querySelector(".popup-close"),
  popupSubmit = document.querySelector(".popup-btn"),
  formCheck = document.querySelector(".form-check"),
  inputClear = document.querySelectorAll(".popup-input input");
addEventListener("click", (e) => {
  e.target &&
    "open-popup" === e.target.getAttribute("id") &&
    ((popup.style.opacity = 1), (popup.style.visibility = "visible"), (bodyBlock.style.overflow = "hidden"));
}),
  closePopup.addEventListener("click", () => {
    (popup.style.opacity = 0), (popup.style.visibility = "hidden"), (bodyBlock.style.overflow = "");
  }),
  (popupSubmit.onclick = function () {
    setTimeout(() => {
      (formCheck.style.opacity = 1),
        (formCheck.style.visibility = "visible"),
        setTimeout(() => {
          (popup.style.opacity = 0),
            (popup.style.visibility = "hidden"),
            (bodyBlock.style.overflow = ""),
            (formCheck.style.opacity = 0),
            (formCheck.style.visibility = "hidden"),
            inputClear.forEach((e) => {
              e.value = "";
            });
        }, 1500);
    }, 1e3);
  });
const arrow = document.querySelectorAll(".menu__arrow"),
  title = document.querySelectorAll(".footer__menu__list");
for (i = 0; i < arrow.length; i++) {
  const e = arrow[i].nextElementSibling,
    t = arrow[i];
  arrow[i].addEventListener("click", function () {
    e.classList.toggle("active"), t.classList.toggle("active");
  });
}
let options = () =>
  (options = isMobile.any() ? { threshold: [0.9], rootMargin: "30px" } : { threshold: [0.9], rootMargin: "120px" });
options();
const param = "animate__animated",
  animationTitle = "animate__flipInX",
  animationBounce = "animate__bounceIn",
  serviceAnim = document.querySelector(".service__title"),
  cleaningTitle = document.querySelector(".cleaning__title"),
  outService = document.querySelector(".head__title"),
  coatingTitle = document.querySelector(".body-coating__title"),
  differentTitle = document.querySelector(".body-different__title"),
  articles = document.querySelector(".body-acticles__text-title"),
  callbackTitle = document.querySelector(".body-callback__bottom-title"),
  callTitle = document.querySelector(".body-callback__title"),
  statistic = document.querySelectorAll(".cleaning__statistic-item"),
  card = document.querySelectorAll(".outservices__cart"),
  homeImage = document.querySelector(".coating__image"),
  differentImage = document.querySelector(".different__image"),
  tel = document.querySelectorAll(".act-img");
function onEntry(e) {
  e.forEach((e) => {
    e.isIntersecting
      ? (e.target.classList.add(param), e.target.classList.add(animationTitle))
      : (e.target.classList.remove(param), e.target.classList.remove(animationTitle));
  });
}
function onEntryUp(e) {
  e.forEach((e) => {
    e.isIntersecting
      ? (e.target.classList.add(param), e.target.classList.add("pullDown"))
      : (e.target.classList.remove(param), e.target.classList.remove("pullDown"));
  });
}
function onEntryDown(e) {
  e.forEach((e) => {
    e.isIntersecting
      ? (e.target.classList.add(param), e.target.classList.add("pullUp"))
      : (e.target.classList.remove(param), e.target.classList.remove("pullUp"));
  });
}
function onEntryAny(e) {
  e.forEach((e) => {
    e.isIntersecting
      ? (e.target.classList.add(param), e.target.classList.add("tossing"))
      : (e.target.classList.remove(param), e.target.classList.remove("tossing"));
  });
}
let observer10 = new IntersectionObserver(onEntryAny, options),
  elements10 = tel[1];
observer10.observe(elements10);
let observer = new IntersectionObserver(onEntry, options),
  elements = serviceAnim;
observer.observe(elements);
let observer2 = new IntersectionObserver(onEntry, options),
  elements2 = cleaningTitle;
observer2.observe(elements2);
let observer3 = new IntersectionObserver(onEntry, options),
  elements3 = outService;
observer3.observe(elements3);
let observer4 = new IntersectionObserver(onEntry, options),
  elements4 = coatingTitle;
observer4.observe(elements4);
let observer5 = new IntersectionObserver(onEntry, options),
  elements5 = differentTitle;
observer5.observe(elements5);
let observer6 = new IntersectionObserver(onEntry, options),
  elements6 = articles;
observer5.observe(elements6);
let observer7 = new IntersectionObserver(onEntry, options),
  elements7 = callTitle;
observer7.observe(elements7);
let observer8 = new IntersectionObserver(onEntryUp, options),
  elements8 = statistic[0];
observer8.observe(elements8);
let observer9 = new IntersectionObserver(onEntryDown, options),
  elements9 = statistic[2];
observer9.observe(elements9),
  isMobile.any()
    ? (window.onscroll = function (e) {
        const t = document.querySelector(".header__wrapper");
        window.scrollY > 200 ? t.classList.add("scroll") : t.classList.remove("scroll"),
          window.scrollY > 2400 && window.scrollY < 3507
            ? card[0].classList.add("pullUp")
            : card[0].classList.remove("pullUp"),
          window.scrollY > 2850 && window.scrollY < 3955
            ? card[1].classList.add("pullUp")
            : card[1].classList.remove("pullUp"),
          window.scrollY > 3280 && window.scrollY < 4420
            ? card[2].classList.add("pullUp")
            : card[2].classList.remove("pullUp"),
          window.scrollY > 4850 && window.scrollY < 6e3
            ? homeImage.classList.add("pullUp")
            : homeImage.classList.remove("pullUp"),
          window.scrollY > 5800 && window.scrollY < 6850
            ? differentImage.classList.add("pullUp")
            : differentImage.classList.remove("pullUp");
      })
    : (window.onscroll = function (e) {
        const t = document.querySelector(".header__wrapper");
        window.scrollY > 200 ? t.classList.add("scroll") : t.classList.remove("scroll");
      });
