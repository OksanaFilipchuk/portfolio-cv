const portfolio = document.querySelector(".card-wrapper");

let projects = [
  {
    title: "Async Race",
    picture: "/img/portfolio-img/async-race.png",
    codeUrl:
      "https://github.com/OksanaFilipchuk/async-race/tree/async-race-new",
    deployUrl: "https://oksanafilipchuk.github.io/async-race/",
    backendUrl: "https://async-race-xoj8.onrender.com/",
  },
  {
    title: "Online zoo",
    picture: "/img/portfolio-img/animals.png",
    codeUrl: "https://github.com/OksanaFilipchuk/online-zoo",
    deployUrl: "https://oksanafilipchuk.github.io/online-zoo/pages/main/",
    backendUrl: "",
  },
  {
    title: "Css Slider",
    picture: "/img/portfolio-img/cssSlider.png",
    codeUrl: "https://github.com/OksanaFilipchuk/cssMemSlider",
    deployUrl:
      "https://oksanafilipchuk.github.io/cssMemSlider/cssMemSlider/index.html",
    backendUrl: "",
  },
  {
    title: "Game-algorithm",
    picture: "/img/portfolio-img/game.png",
    codeUrl: "https://github.com/OksanaFilipchuk/eldritch-codejam",
    deployUrl: "https://oksanafilipchuk.github.io/eldritch-codejam/",
    backendUrl: "",
  },
  {
    title: "Virtual keyboard",
    picture: "/img/portfolio-img/keyboard.png",
    codeUrl:
      "https://github.com/OksanaFilipchuk/virtual-keyboard/tree/keyboard",
    deployUrl: "https://oksanafilipchuk.github.io/virtual-keyboard/",
    backendUrl: "",
  },
  {
    title: "Momentum",
    picture: "/img/portfolio-img/momentum.png",
    codeUrl: "https://github.com/OksanaFilipchuk/Momentum",
    deployUrl: "https://oksanafilipchuk.github.io/Momentum/",
    backendUrl: "",
  },
  {
    title: "Portfolio",
    picture: "/img/portfolio-img/portfolio.png",
    codeUrl: "https://github.com/OksanaFilipchuk/portfolio",
    deployUrl: "https://oksanafilipchuk.github.io/portfolio/portfolio/",
    backendUrl: "",
  },
  {
    title: "Online shop",
    picture: "/img/portfolio-img/shop.png",
    codeUrl: "https://github.com/OksanaFilipchuk/book-shop",
    deployUrl: "https://oksanafilipchuk.github.io/book-shop/main-page/",
    backendUrl: "",
  },
  {
    title: "Travel",
    picture: "/img/portfolio-img/travel.png",
    codeUrl: "https://github.com/OksanaFilipchuk/Travel",
    deployUrl:
      "https://rolling-scopes-school.github.io/oksanafilipchuk-JSFEPRESCHOOL2022Q2/travel/",
    backendUrl: "",
  },

  {
    title: "Weather",
    picture: "/img/portfolio-img/weather.png",
    codeUrl: "https://github.com/OksanaFilipchuk/Weather",
    deployUrl: "https://incomparable-selkie-9577e4.netlify.app/",
    backendUrl: "",
  },
];

projects.forEach((el) => {
  let card = document.createElement("div");
  card.classList.add("card");
  let picture = document.createElement("div");
  picture.classList.add("pic");
  picture.style.backgroundImage = `url("${el.picture}")`;
  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  let title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = el.title;

  let appLink = document.createElement("a");
  appLink.textContent = "App";
  appLink.classList.add("card-link");
  appLink.setAttribute("href", el.deployUrl);
  appLink.setAttribute("target", "_blank");

  let appCodeLink = document.createElement("a");
  appCodeLink.textContent = "Code";
  appCodeLink.classList.add("card-link");
  appCodeLink.setAttribute("href", el.codeUrl);

  cardBody.appendChild(title);
  cardBody.appendChild(appLink);
  cardBody.appendChild(appCodeLink);

  card.appendChild(picture);
  card.appendChild(cardBody);

  if (el.backendUrl) {
    let backendLink = document.createElement("a");
    backendLink.textContent = "Backend Part";
    backendLink.classList.add("card-link");
    backendLink.setAttribute("href", el.backendUrl);
    cardBody.appendChild(backendLink);
  }
  portfolio.appendChild(card);
});
