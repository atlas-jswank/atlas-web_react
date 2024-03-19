import $ from "jquery";

function p(text) {
  const elm = document.createElement("p");
  elm.innerHTML = text;
  return elm;
}

document.body.appendChild(p("Holberton Dashboard"));
document.body.appendChild(p("Dashboard data for the students"));
document.body.appendChild(p("Copyright - Holberton School"));
