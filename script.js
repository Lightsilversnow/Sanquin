function showNav(){
    var hidden = document.getElementById("other_pages");
    if (hidden.style.display === "block"){
        hidden.style.display = "none";
    } else {
        hidden.style.display = "block";
    }
}


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