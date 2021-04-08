 var km = prompt("quanti km vuoi percorrere?");
 var age = prompt("quanti hanni hai?")

 var prezzo_intero = km * 0.21;


 var minorenni = prezzo_intero * 20 / 100;
 var calMin = prezzo_intero - minorenni;
 console.log(calMin);


 var over = prezzo_intero * 40 / 100;
 var calover = prezzo_intero - calover;
 console.log(calover);


 // messaggi in uscita



 if (age < 18) {
     document.getElementById('exit').innerHTML = "il prezzo con lo sconto del 20% è " +
         calMin + " euro";
 } else if (age > 65) {
     document.getElementById('exit').innerHTML = "il prezzo scontato è " +
         calover;

 } else {

     document.getElementById('exit').innerHTML = " il costo è " +
         calover;

 }