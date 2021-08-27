//br = prompt ("Neki tekst:");

//console.log(typeof br);
//console.log(typeof parseInt(br));
//console.log(br);


//broj = prompt("Unesite prvu vrednost broja:");

//while (broj > 0){

   // if (broj >= 10 && broj <=20){
   // console.log("Cestitamo uneli ste ispravan raspon"); 
  // break
//} else {
    //console.log("Pogresan raspon");
    //broj = prompt("Pokusajte ponovo");


//}
//}

//while(true){
//operacija = prompt("Unesite operaciju:");

//if (operacija === "exit"){
  //  break;
//}
//br1 = parseInt (prompt("Unesite prvi broj"));
//br2 = parseInt (prompt("Unesite drugi broj "));

//switch (operacija){
   // case "sabiranje";
   // case "+":
   // console.log("Zbir je:", br1 + br2);
   // break;
   // case "sabiranje";
   // case "-":
   // console.log("Razlika je:", br1 + br2);
   // break;
   // case "sabiranje";
   // case "*":
   // console.log("Proizvod je:", br1 + br2);
   // break;
   // case "sabiranje";
   // case "/":
   // console.log("Kolicnik je:", br1 + br2);
   // break;
   // default:
   // console.log("Neispravan unos");
   // break;
   // }
//}



//ovo je string za proveru

var1 = 'Download the TextNow app and get a second phone number – with the area code you choose. Use TextNow as your business phone line on your phone, tablet, and computer.';

//inicijalizacija brojaca za svako slovo
brojac_a=0;
brojac_e=0;
brojac_i=0;
brojac_o=0;
brojac_u=0;
//petlja, prolazak kroz string, ako je manja od duzine da se prekine, jer pocinje od 0
for (let i = 0; i < var1.length; i++){
    //provera za odredjena slova, inkrementacija brojaca u koliko se slovo poklapa sa uslovom
    switch (var1[i]){
        case "a":
        brojac_a++;
        break;
        case "e":
        brojac_e++;
        break;
        case "i":
        brojac_i++;
        break;
        case "o":
        brojac_o++;
        break;
        case "u":
        brojac_u++;
        break;
    }
}
//ispis rezultata
console.log("slova a ima:", brojac_a)
console.log("slova e ima:", brojac_e)
console.log("slova i ima:", brojac_i)
console.log("slova o ima:", brojac_o)
console.log("slova u ima:", brojac_u)
