import $ from "jquery";

function p(text) {
  const elm = document.createElement("p");
  elm.innerHTML = text;
  return elm;
}

$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append("<p>Copyright - Holberton School</p>");
