import { navbar,startDiv } from "./Compopnents/navbar.js";
import { footer } from "./Compopnents/footer.js";

// Appending navBar
let navbarDiv=document.getElementById("Navbar");
navbarDiv.innerHTML=navbar();


// Appending Start Order
let startOrder=document.getElementById("startDiv");
startOrder.innerHTML=startDiv();

// Appending footer
let footerDiv=document.getElementById("footer");
footerDiv.innerHTML=footer();