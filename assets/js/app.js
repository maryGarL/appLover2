var contenedor=document.getElementById("contenedor");
for (var i = 1; i <= 12; i++) {
var div=document.createElement("div");
var image=document.createElement("img");
var span=document.createElement("span");
div.setAttribute("class","conten-images");
image.setAttribute("class","work");
span.setAttribute("id","titulo");
image.setAttribute("width","320px");
image.setAttribute("onclick","onClick(this)")
image.setAttribute("src","assets/img/img-"+i+".jpg");
span.innerHTML="Proyecto "+i
div.appendChild(image);
div.appendChild(span);
contenedor.appendChild(div);
}
function onClick(element) {
  document.getElementById("image-modal").src = element.src;
  document.getElementById("modal").style.display ="block";
}
function nonClick() {
  document.getElementById("modal").style.display ="none";
}
