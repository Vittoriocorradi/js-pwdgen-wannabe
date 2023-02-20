'use strict'

// Step 1: Chiedo all'utente di inserire il nome per attribuire il valore alla variabile una volta aperta la pagina

const userName = prompt('Inserire il nome');

// Step 2: Chiedo all'utente di inserire il cognome per attribuire il valore alla variabile una volta aperta la pagina

const userSurname = prompt('Inserire il cognome');

// Step 3: Chiedo all'utente di inserire il colore preferito per attribuire il valore alla variabile una volta aperta la pagina

const userColor = prompt('Inserire il proprio colore preferito')

// Step 4: Modifico h1 nel'HTML originale con il nome e il cognome inseriti dall'utente

document.querySelector('h1').innerHTML=`Benvenuto, ${userName} ${userSurname}!`;

// Step 5: Unisco le variabili precedenti in una singola variabile password che verrà poi mostrata sulla pagina e nella console

const userPwd = userName + userSurname + userColor + '89';

// Step 6: Modifico il campo password con id "user-pwd" sull'HTML originale con la variabile userPwd inizializzata nello step precedente

document.getElementById('user-pwd').innerHTML=userPwd;

//step 7: Chiedo che la variabile userPwd venga riportata anche nella console

console.log(userPwd)