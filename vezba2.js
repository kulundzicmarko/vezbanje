var broj = 12;

var ostatak = broj % 3;

if (ostatak == 0) {
   console.log('plavo');
}
else if (ostatak == 1) {
   console.log('crvena');
}
else if (ostatak == 2) {
    console.log('zelena');
}
else if (ostatak == 3) {
    console.log('ljubicasta');
}
else {
    console.log('zuta');
}

for (let i = 0; i < 100; i+=2){
    console.log(i)
}

for (let i = 0; i <= 50; i++){
   if ( i % 5===0  && i % 3===0){
   console.log("fizzbuzz");
}
   else if (i%3===0){
   console.log("fizz");
}
   else if (i%5===0){
   console.log("buzz");
}
    else console.log(i)
}

for (let i = 1; i <= 10; i++){
    if (i === 7 ){
        continue;
    }
    console.log(i);
}


   