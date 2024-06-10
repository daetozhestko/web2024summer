alert(" 5 > 4 " + `${5 > 4}`) // → true
alert('"apple" > "pineapple"' + `${"apple" > "pineapple"}`) // → false
alert('"2" > "12"' + `${"2" > "12"}`) // → true
alert(" undefined == null " + `${undefined == null}`) // → true
alert(" undefined === null " + `${undefined === null}`) // → false
alert('null == "\n0\n"' + `${null == "\n0\n"}` )// → false
alert('null === +"\n0\n"' + ` ${null === +"\n0\n"} `)// → false