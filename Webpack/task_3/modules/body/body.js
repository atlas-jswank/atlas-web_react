import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

let count = 0;
function updateCounter() {
  count++;
  const elm = document.getElementById('count');
  elm.innerHTML = `${count} clicks on the button`;
}

document.getElementsByTagName('button')[0].onclick = _.debounce(
  updateCounter,
  500
);
