// Navigation bar
var number = 1;

function showNav(){
    var hidden = document.getElementById("other_pages");
    if (number == 0){
        hidden.classList.replace('show', 'hide');
        number = 1;

    } else {
        hidden.classList.replace('hide', 'show');
        number = 0;
    }
}

// Uitklapbare tekst
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// Verspot eerste afbeelding op homepagina
const text = document.getElementById("Poster_afbeelding");
window.setTimeout( function() {
  text.classList.add('hidden');
}, 5000)