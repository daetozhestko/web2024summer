//-----Task 1-----
alert( null || 2 || undefined ); // -> 2

//-----Task 2-----
alert( alert(1) || 2 || alert(3) ); // -> 1 -> 2

//-----Task 3-----
alert(1 && null && 2); // -> null

//-----Task 4-----
alert( alert(1) && alert(2) ); // -> 1 -> undefined

//-----Task 5-----
alert( null || 2 && 3 || 4 ); // -> 3

//-----Task 6-----
let age = +prompt("Age", '')
if (age >= 14 && age <= 90){
    alert("age >= 14 && age <= 90" + ` age = ${age}`);
}

//-----Task 7-----
if (age < 14 || age > 90){
    alert("age >= 14 && age <= 90" + ` age = ${age}`);
}

//-----Task 8-----
if (-1 || 0) alert( 'first' );

if (-1 && 0) alert( 'second' );

if (null || -1 && 1) alert( 'third' );

//-----Task 9-----
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}