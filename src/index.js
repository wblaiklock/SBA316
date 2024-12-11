let menuLinks = [
  { text: "About", 
    subText: "A little about the website"
  },
  {
    text: "Status",
    subText: "Looks like you are using the following browser:"
  },
  {
    text: "Contact",
    subText: "Use this form to theoretically contact me"
   },
  {
    text: "Cat",
    subText: "This is a cat"
  },
];

const app = document.getElementById("app");
const uaData = window.navigator.userAgent;

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SBA 316</h1>"
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

menuLinks[1].innerHTML = `<p>`+uaData+`</p>`;

const frag = document.createDocumentFragment();

for (let i = 0; i < menuLinks.length ;  i++ ) {
  let newEl = frag.appendChild(document.createElement("A"));
  newEl.setAttribute("href", "#");
  newEl.innerText = menuLinks[i].text;

  newEl.addEventListener("click", (event) => {
    let button = event.target;
 
    event.preventDefault();
    mainEl.innerHTML = `<h1>${menuLinks[i].subText}</h1>`;
    formDiv.innerHTML =menuLinks[i].innerHTML;
    highlight(newEl);
    bindSpecial();
  });

}

topMenuEl.append(frag);

let myWindow;

function newWindow() {
  myWindow = window.open(
   "./img/cat.gif",
    "Cat",
    "width=428, height=400, resizable=yes, scrollbars=no, location=yes"
  );
  myWindow.focus();
}

function bindSpecial()
{
  let catLink=document.getElementById("catLink");
  if(catLink)
    catLink.addEventListener("click", newWindow);

  form = document.getElementById("form");
  if(form) {
    fullName = form.elements["name"];
    email = form.elements["email"];
    
    form.addEventListener("submit", validate);
  }
}


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

let form;
let fullName;
let email;

function validate(evt) {
  const emailVal = validateEmail();
  if (emailVal === false) {
    evt.returnValue = false;
    return false;
  }
  return true;
}

function validateEmail() {
  let emailVal = email.value;

  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    alert(
      "Your email must include an @ symbol."
    );
    email.focus();
    return false;
  }

  if (dotpos - atpos < 2) {
    alert(
      "Invalid structure: @.\nYou must include a domain name after the @ symbol."
    );
    email.focus();
    return false;
  }

  return emailVal;
}