
// Importing navBar and Start Order
import { navbar,startDiv } from "./Compopnents/navbar.js";

// Appending navBar
let navbarDiv=document.getElementById("Navbar");
navbarDiv.innerHTML=navbar();


// Appending Start Order
let startOrder=document.getElementById("startDiv");
startOrder.innerHTML=startDiv();
