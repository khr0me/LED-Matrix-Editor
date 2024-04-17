var ultimoBottoneCliccato = null;

function toggleLingue(bottone) {
  cambiaLingua(bottone);
  
  var lista = document.getElementById("lista");
  if (lista.style.display === "none") {
    lista.style.display = "block";
  } else {
    lista.style.display = "none";
  }
}

function cambiaLingua(bottone) {
    if (ultimoBottoneCliccato !== null && bottone.parentNode.parentNode.id === "lista") {
      var bottonePrincipale = document.querySelector(".image");
      var bottoneLista = bottonePrincipale.nextElementSibling.querySelector("button");
  
      var immaginePrincipale = bottonePrincipale.style.backgroundImage;
      var immagineLista = bottoneLista.style.backgroundImage;
  
      bottonePrincipale.style.backgroundImage = immagineLista;
      bottoneLista.style.backgroundImage = immaginePrincipale;
    }
    ultimoBottoneCliccato = bottone;
  }
  