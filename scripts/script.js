var deButton = document.querySelector(".menu");

deButton.onclick = toggleMenu;

function toggleMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.toggle("toonMenu");
}




// function toggleMenu(){
//     var deNav = document.querySelector("nav");
//     deNav.classList.add
// }


// if (openButton == "true") {
//     deNav.classList.add("toonMenu");
//     openButton = "false"
//     deKnop.classList.add("toonMenu")
// }
// else {
//     deNav.classList.remove("toonMenu");
//     openButton = "true"  
//     deKnop.classList.remove("toonMenu")
// }