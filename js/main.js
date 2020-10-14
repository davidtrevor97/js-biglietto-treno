//richiesta input
var kilometri = prompt("Quanti Kilometri dovrai percorrere?");
var età = prompt("Quanti anni hai?");
//conferma dati
if ( isNaN(kilometri) ){
  alert("Assicurati di inserire solamente dei numeri!");
}
else {
  kilometri = kilometri;
}
if ( isNaN(età) ){
  alert("Assicurati di inserire solamente dei numeri!");
}
else {
  età = età;
}
//calcolo prezzo
var prezzo = kilometri * 0.21;
if (età <= 18){
  prezzo = (prezzo / 100) * 80;
}
else if(età>= 65){
  prezzo = (prezzo / 100) * 60;
}
else{
  prezzo = prezzo;
}
console.log(prezzo);
//mostra output prezzo
document.getElementById("h1").innerHTML = "Ecco il prezzo del tuo biglietto:" + prezzo + "€";
