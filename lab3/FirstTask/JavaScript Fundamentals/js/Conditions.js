//-----Task 1-----
if ("0") {
    alert( 'Hello' );
}

//-----Task 2-----
'use strict';

let value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}

//-----Task 3-----
let value1 = prompt('Type a number', 0);

if (value1 > 0) {
  alert( 1 );
} else if (value1 < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

//-----Task 4-----
let a = +prompt("First value", "");
let b = +prompt("Second value", "");

let result = (a + b < 4) ? 'Below' : 'Over';
alert("Result of (value1 + value2 < 4) ? 'Below' : 'Over';" + ` ${result}`)

//-----Task 5-----
let login = prompt("User type?", '');
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
alert(message);