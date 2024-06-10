// -----Task 1-----
let a = 1, b = 1;

alert( `(a=1) Result of '++a' = ${++a}` ); // -> 2
alert( `(b=1) Result of 'b++' = ${b++}` ); // -> 1

alert( `After a = ${a}` ); // -> 2
alert( `After b = ${b}` ); // -> 2

// -----Task  2-----
let a1 = 2;
let x1 = 1 + (a *= 2); // x1 = 1 + (4) -> 2 * 2

alert(`Task 2 result of a = ${a1}`);
alert(`Task 2 result of x = ${x1}`);

// -----Task  3-----
"" + 1 + 0 // -> "10"
"" - 1 + 0 // -> -1
true + false // -> 1
6 / "3" // -> 2
"2" * "3" // -> 6
4 + 5 + "px" // -> "9px"
"$" + 4 + 5 // -> "$45"
"4" - 2 // -> 2
"4px" - 2 // -> NaN
"  -9  " + 5 // -> "  -9  5"
"  -9  " - 5 // -> -14
null + 1 // -> 1
undefined + 1 // -> NaN
" \t \n" - 2 // -2

// -----Task  4-----
let num1 = prompt("First number?", 1);
let num2 = prompt("Second number?", 2);

alert(`Result = ${+num1 + +num2}`);
