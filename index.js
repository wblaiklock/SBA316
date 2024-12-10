import "./styles.css";

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

const subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

let topMenuLinks = [];

for (const m of menuLinks) {
  let newEl = document.createElement("A");
  newEl.setAttribute("href", m.href);
  newEl.innerText = m.text;
  topMenuEl.append(newEl);
  topMenuLinks.push(newEl);

  newEl.addEventListener("click", (event) => {
    let setActive = false;
    let button = event.target;
    let subLinks = m.subLinks;

    event.preventDefault();

    if (button.tagName != "A") return;

    console.log(button.innerText);

    if (subLinks && subLinks.length > 0) {
      if (!button.classList.contains("active")) setActive = true;
    } else {
      mainEl.innerHTML = `<h1> ${event.target.innerText} <h1>`;
    }

    for (const t of topMenuLinks) t.classList.remove("active");

    if (setActive) {
      button.classList.add("active");
      subMenuEl.style.top = "100%";
      buildSubMenu(subLinks);
    } else {
      subMenuEl.style.top = 0;
    }
  });
}

function buildSubMenu(subLinks) {
  subMenuEl.innerHTML = "";

  for (const link of subLinks) {
    let newEl = document.createElement("A");
    newEl.setAttribute("href", link.href);
    newEl.innerText = link.text;

    subMenuEl.append(newEl);
  }
}

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.tagName != "A") return;

  subMenuEl.style.top = 0;

  for (const t of topMenuLinks) t.classList.remove("active");

  mainEl.innerHTML = `<h1> ${event.target.innerText} <h1>`;
});
