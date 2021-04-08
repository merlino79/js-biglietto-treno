 var km = prompt("quanti km vuoi percorrere?");
 var age = prompt("quanti hanni hai?")

 var prezzo_intero = km * 0.21;


 var minorenni = prezzo_intero * 20 / 100;
 var calMin = prezzo_intero - minorenni;
 console.log(calMin);


 var over = prezzo_intero * 40 / 100;
 var cal_over = prezzo_intero - over;
 console.log(cal_over);


 // messaggi in uscita



 if (age < 18) {
     document.getElementById('exit').innerHTML = "il prezzo con lo sconto del 20% è " +
         calMin + " euro";
 } else if (age > 65) {
     document.getElementById('exit').innerHTML = "il prezzo scontato è " +
         cal_over;

 } else {

     document.getElementById('exit').innerHTML = " il costo è " + prezzo_intero;

 }