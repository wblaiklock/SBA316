let menuLinks = [
  { text: "About", 
    subText: "A little about the website",
    href: "/about" 
  },
  {
    text: "Catalog",
    href: "#",

  },
  {
    text: "Contact",
    href: "#",
    subText: "Use this form to theoretically contact me"
   },
  {
    text: "Cat",
    subText: "This is a cat",
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

const aboutDiv = document.getElementById("about");
menuLinks[0].innerHTML=aboutDiv.innerHTML;
aboutDiv.innerHTML="";

const frag = document.createDocumentFragment();

for (let i = 0; i < menuLinks.length ;  i++ ) {
  let newEl = frag.appendChild(document.createElement("A"));
  newEl.setAttribute("href", menuLinks[i].href);
  newEl.innerText = menuLinks[i].text;

  newEl.addEventListener("click", (event) => {
    let button = event.target;
 
    event.preventDefault();
    mainEl.innerHTML = `<h1>${menuLinks[i].subText}</h1>`;
    formDiv.innerHTML =menuLinks[i].innerHTML;
    highlight(newEl);
  });

}

topMenuEl.append(frag);

highlight();
function highlight(el)
{
  for(node of topMenuEl.childNodes)
  {
    if(el==node)
     node.style.color="yellow";
    else
      node.style.color="white";
  }  
}