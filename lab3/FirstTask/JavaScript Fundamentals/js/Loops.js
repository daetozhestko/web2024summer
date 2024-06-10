//-----Task 1-----
let i = 3;
let lastRes;

while (i) {
    lastRes = i;
    i--;
}
alert("Last result loop is " + `${lastRes} `)

//-----Task 2-----
let i1 = 0;
while (++i1 < 5) alert( i1 ); // => 1, 2, 3, 4

let i2 = 0;
while (i2++ < 5) alert( i2 ); // => 1, 2, 3, 4, 5

//-----Task 3-----
for (let i = 0; i < 5; ++i) alert( i ); // => 0, 1, 2, 3, 4

for (let i = 0; i < 5; i++) alert( i ); // => 0, 1, 2, 3, 4

//-----Task 4-----
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i ); // 2, 4, 6, 8, 10
    }
  }
  
//-----Task 5-----
let i3 = 0;
while (i3 < 3) {
  alert( `number ${i3}!` ); // 0, 1, 2
  i3++;
}

//-----Task 6-----
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//-----Task 7-----
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }

  alert( i ); // 2, 3, 5, 7
}

