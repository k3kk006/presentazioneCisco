const navbarSystem = document.getElementById("navbarSystem");

const templateNavbar = `
<nav class="navbar navbar-expand-lg" id="mainNavbar" style="z-index:2;">
  <div class="container-fluid">
    <!-- Pulsante per la compattazione della navbar -->
    <div style="display:flex; align-items: center">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#verticalNavbar"
        aria-controls="verticalNavbar"
        aria-expanded="false"
        aria-label="Attiva navigazione"
      >
        <span class="navbar-toggler-icon"></span>
      </button>



      <!-- Brand/logo -->
      <div id="logo" style="margin-left:10px;">
      <a class="navbar-brand" href="https://www.netacad.com/" target="_blank" >
        <div style="border: 3px solid black; margin-bottom: 2px; border-radius:10px;margin-top:20px;padding: 5px;">
          <img src="immaginiPacketTracer/logo.jpg" style=" width: 100px; height: 60px;min-height:60px;min-width:100px; margin: 5px; border: 2px solid black; border-radius:10px;">
          Cisco Packet Tracer
        </div>
      </a>
      </div>
    </div>

    <div id="sezioneMainNavbar"style="display:flex; align-items: center;">
    <!-- Link principali della navbar -->
          <div  style="justify-content:right">
            <ul class="navbar-nav flex-row" style="align-content:end;">
              <!-- Link per il download -->
              <li class="nav-item mx-2"">
                <a class="nav-link d-flex flex-column" href="https://hr.smartworldclub.net/11702356-how-to-download-and-install-cisco-packet-tracer-windows-10" target="_blank">
                  <button class="nav-link d-flex flex-column">
                    <i class="bi bi-search mx-auto"></i>
                    <span style="text-align:center">Download</span>
                  </button>
                </a>
              </li>
              
              <!-- Link per le impostazioni -->
              <li class="nav-item mx-2">
                <a class="nav-link d-flex flex-column" href="#">
                  <button class="nav-link d-flex flex-column" onclick="apriSezioneImpostazioni()">
                    <i class="bi bi-gear mx-auto"></i>
                    <span>Impostazioni</span>
                  </button>
                </a>
              </li>
              
              <!-- Link per la lista dei desideri -->
              <li class="nav-item mx-2">
                <a class="nav-link d-flex flex-column" href="">
                  <button class="nav-link d-flex flex-column" onclick="apriPresentazione() ">
                    <i class="bi bi-bookmark-heart mx-auto"></i>
                    <span>Apri Presentazione</span>
                  </button>
                </a>
              </li>
            </ul>
          </div>
    </div>
  </div>
</nav>


<nav class="navbar navbar-expand-lg navbar-vertical py-0" style="z-index:1;">
  <div class="container-fluid flex-column">
    <div class="collapse navbar-collapse" id="verticalNavbar">
      <ul class="navbar-nav flex-column nav-pills" id="verticalNavbar" onclick="mostraAnimazioneIniziale()">
        <li class="nav-item">
          <a class="nav-link" href="index.html#puntatore0">Introduzione</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#puntatore1">Un po' di storia...</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#puntatore2">A che cosa serve?</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#puntatore3">Dispositivi e Tecnologie Supportate</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#puntatore4">I primi approcci</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#puntatore5">Esercizi e Progetti Pratici</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#puntatore6">Risorse di Apprendimento Aggiuntive</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#puntatore7">Utilizzo e vantaggi</a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="index.html#puntatore8">Supporto e Assistenza</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#puntatore9">Risorse Educative</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="index.html#puntatore10">Novità e Aggiornamenti</a>
        </li>-->
      </ul>
    </div>
  </div>
</nav>












<div id="sezioneImpostazioni" class="sezione-impostazioni">
<div class="intestazione">
  <h2>Impostazioni</h2>
  <br>
</div>

<!-- Contenuti della sezione -->
<div class="contenuto">
  <h5>Seleziona una Palette:</h5>
  <!-- Aggiungi qui i tuoi bottoni per le palette -->
    <button class="cambia-palette" onclick="cambiaTemaImpostazioni('palette-primavera')">Primavera</button>
    <button class="cambia-palette" onclick="cambiaTemaImpostazioni('palette-oceano')">Oceano</button>
    <button class="cambia-palette" onclick="cambiaTemaImpostazioni('palette-rosa-caldo')">Rosa Caldo</button>
    <button class="cambia-palette" onclick="cambiaTemaImpostazioni('palette-notte-stellata')">Notte Stellata</button>
    <button class="cambia-palette" onclick="cambiaTemaImpostazioni('palette-terra')">Terra</button>
    <button class="cambia-palette" onclick="cambiaTemaImpostazioni('palette-arancio-vivace')">Arancio Vivace</button>
    <button class="cambia-palette" onclick="cambiaTemaImpostazioni('palette-grigio-elegante')">Grigio Elegante</button>
    <button class="cambia-palette" onclick="cambiaTemaImpostazioni('palette-rosa-malva')">Rosa Malva</button>
    <button class="cambia-palette" onclick="cambiaTemaImpostazioni('palette-turchese-acqua')">Turchese Acqua</button>
    <button class="cambia-palette" onclick="cambiaTemaImpostazioni('palette-mare-azzurro')">Mare Azzurro</button>

  

  
</div> 
   <button class="chiudi-sezione" onclick="chiudiSezioneImpostazioni()">Chiudi</button>
</div>


<div id="overlay"></div>


`;

document.addEventListener("DOMContentLoaded", function(event) { 
  const animatedElements = document.querySelectorAll('.animatedElement');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function animateOnScroll() {
    animatedElements.forEach(function(element) {
      if (isInViewport(element)) {
        element.classList.add('visible');

      } 
    });
  }

  animateOnScroll(); // Chiamata iniziale pe animare gli elementi già nella viewport

  window.addEventListener('scroll', animateOnScroll);
});


//------------------------------------------------------------------------------
// Funzione per aprire la sezione degli altri parametri
function showSection(index) {
  var sectionId = "sezione" + index;
  var section = document.getElementById(sectionId);
  if (section) {
      section.style.display = 'block';
      document.getElementById('overlay').style.display = 'block';
  } else {
      console.error("La sezione con l'ID " + sectionId + " non esiste.");
  }
}

// Funzione per chiudere la sezione degli altri parametri
function chiudiSezione(index) {
  var sectionId = "sezione" + index;
  var section = document.getElementById(sectionId);
  if (section) {
      section.style.display = 'none';
      document.getElementById('overlay').style.display = 'none';
  } else {
      console.error("La sezione con l'ID " + sectionId + " non esiste.");
  }
}

//------------------------------------------------------------------------------

function apriPresentazione() {
  var urlPresentazione = "PACKET TRACER Presentazione di Cuna Jacopo, Piccini Giulio, Mangione Francesco 4°A.pdf" ;
  window.open(urlPresentazione, "_blank", "fullscreen=yes, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
}


class Navbar {
  constructor(template, vociMenu) {
    this.template = template;
    this.vociMenu = vociMenu;
  }

  aggiungiVociAlMenu(posizione) {
    this.vociMenu.forEach((voceMenu) => {
      const elementoLi = document.createElement("li");
      elementoLi.className = "nav-item my-2";
      elementoLi.innerHTML = `<a class="nav-link" href="${voceMenu.link}">${voceMenu.titolo}</a>`;
      posizione.appendChild(elementoLi);
    });
  }

  montaNavbar(posizione) {
    posizione.innerHTML = this.template;
  }
}



const menu = [
  {
    link: "./index.html",
    titolo: "Home",
  },
  {
    link: "./shoppinglist.html",
    titolo: "Shopping List",
  },
  {
    link: "./cards.html",
    titolo: "Cards",
  },
  {
    link: "#",
    titolo: "Vedremo...",
  },
];

const navbarTemplate = new Navbar(templateNavbar, menu);
navbarTemplate.montaNavbar(navbarSystem);
const menuVerticale = document.getElementById("menuVerticale");
navbarTemplate.aggiungiVociAlMenu(menuVerticale);
//--------------------------------------------
// Funzione per cambiare il tema dalle impostazioni
function cambiaTemaImpostazioni(tema) {
  sessionStorage.setItem('tema', tema);
  applicaTema(tema);
}

// Funzione per applicare il tema corrente
function applicaTema(tema) {
  // Rimuovi tutte le classi relative ai temi dal body
  document.body.classList.remove('palette-primavera', 'palette-oceano', 'palette-rosa-caldo', 'palette-notte-stellata', 'palette-terra', 'palette-arancio-vivace', 'palette-grigio-elegante', 'palette-rosa-malva', 'palette-turchese-acqua', 'palette-mare-azzurro');

  // Aggiungi la classe del tema corrente
  document.body.classList.add(tema);
}
function apriSezioneImpostazioni() {
  document.getElementById('sezioneImpostazioni').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function chiudiSezioneImpostazioni() {
  document.getElementById('sezioneImpostazioni').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}



// Funzione per cambiare il tema dalle impostazioni
function cambiaTemaImpostazioni(tema) {
  sessionStorage.setItem('tema', tema);
  applicaTema(tema);
}

// Funzione per applicare il tema corrente
function applicaTema(tema) {
  document.body.classList.remove('palette-primavera', 'palette-oceano', 'palette-rosa-caldo', 'palette-notte-stellata', 'palette-terra', 'palette-arancio-vivace', 'palette-grigio-elegante', 'palette-rosa-malva', 'palette-turchese-acqua', 'palette-mare-azzurro');
  document.body.classList.add(tema);
}
function apriSezioneImpostazioni() {
  document.getElementById('sezioneImpostazioni').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function chiudiSezioneImpostazioni() {
  document.getElementById('sezioneImpostazioni').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}
  