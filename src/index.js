var menuLinks = [
  { text: "About", href: "/about" },
  {
    text: "Catalog",
    href: "#",
  },
  {
    text: "Contact",
    href: "#",
  },
  {
    text: "Cat",
    href: "#",
  },
];



const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SBA</h1>"
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");


const formDiv = document.getElementById("formDiv");
menuLinks[2].innerHTML=formDiv.innerHTML;
formDiv.innerHTML="";

const catDiv = document.getElementById("cat");
menuLinks[3].innerHTML=catDiv.innerHTML;
catDiv.innerHTML="";


for (let i = 0; i < menuLinks.length ;  i++ ) {
  let newEl = document.createElement("A");
  newEl.setAttribute("href", menuLinks[i].href);
  newEl.innerText = menuLinks[i].text;
  topMenuEl.appendChild(newEl);



  newEl.addEventListener("click", (event) => {
    let setActive = false;
    let button = event.target;
 
    event.preventDefault();
    mainEl.innerHTML = `<h1>${menuLinks[i].text}</h1>`;
    formDiv.innerHTML = menuLinks[i].innerHTML;
    


  });
}
