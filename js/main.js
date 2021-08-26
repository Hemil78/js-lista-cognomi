// creo un array di cognomi

var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log (cognomi);

// chiedi all’utente il cognome

var cognomeUtente = prompt("Inserisci il tuo cognome");
console.log (cognomeUtente);


// inseriscilo in un array con gli altri cognomi

cognomi.push (cognomeUtente);

// stampa la lista ordinata alfabeticamente

console.log ( cognomi.sort () );

// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

console.log ("La posizione nella lista è:");
console.log ( cognomi.indexOf ( cognomeUtente) + 1);

//creo una lista a video

for (var i = 0; i < cognomi.length; i++) {
    var li = document.createElement('li');
    li.textContent = cognomi[i];
    document.getElementById('ordinary_list').appendChild(li);
}
    
        
    

    

