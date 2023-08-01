
// Importing navBar,footer and Start Order
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

// Menu page button
let menuBtn=document.getElementById("menuBtn")
menuBtn.addEventListener("click",()=>{
    window.location.href="./product.html"
})


// Carousel using TimeOut

const carouselContainer = document.querySelector(".carousel-container");
const carouselTrack = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-track img");
const dotsContainer = document.querySelector(".carousel-dots");

let currentIndex = 0;
let interval;

function showImage(index) {
  carouselTrack.style.transition = "transform 0.3s ease"; // Add a transition
  carouselTrack.style.transform = `translateX(-${index * 100}%)`;

  // Update active dot
  const dots = document.querySelectorAll(".carousel-dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function selectImage(index) {
  currentIndex = index;
  showImage(currentIndex);
}

function createDots() {
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");
    dot.addEventListener("click", () => selectImage(i));
    dotsContainer.appendChild(dot);
  }
}

function startCarousel() {
  interval = setInterval(nextImage, 2000);
}

function stopCarousel() {
  clearInterval(interval);
}

carouselContainer.addEventListener("mouseenter", stopCarousel);
carouselContainer.addEventListener("mouseleave", startCarousel);

// Reset transition after the transition is complete
carouselTrack.addEventListener("transitionend", () => {
  carouselTrack.style.transition = "none";
  showImage(currentIndex);
});

createDots();
showImage(currentIndex);
startCarousel();

 
//   Categories portion starts from here

let categorieImage=[{image:`https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=21.88`,caption:"CHICKEN BUCKETS"},{image:`https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT208.jpg?ver=22.01`,caption:"EXCLUSIVE DEAL"},{image:`https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT200.jpg?ver=22.01`,caption:"NEW LAUNCH"},{image:`https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=22.01`,caption:"BIRYANI BUCKETS"},{image:`https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=22.01`,caption:"BOX MEALS"},{image:`https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=22.01`,caption:"BURGERS"},{image:`https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT89.jpg?ver=22.01`,caption:"SNACKS"},{image:`https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg`,caption:"View All Menu ➜"}] || [];

let catMenu=document.getElementById("catMenu");

let Arr=[]
const categories = ()=>{ 

    categorieImage.forEach(function(el){
        let div=document.createElement("div");
        div.setAttribute("class","goToCat")
    
        let catImage=document.createElement("img");
        catImage.src=el.image;
    
        let catCaption=document.createElement("h4");
        catCaption.innerText=el.caption;
        
        div.append(catImage,catCaption);
        catMenu.append(div);

        Arr.push(el);
        localStorage.setItem("browsCategories",JSON.stringify(Arr))
    })

}

categories();


// Rederecting to Products Page
let goToCat=document.querySelector("#catMenu");
goToCat.addEventListener("click",()=>{
    window.location.href="./product.html"
})


let carosel=document.querySelector("#carosel");
carosel.addEventListener("click",()=>{
    window.location.href="./product.html"
})




const dealsCard=document.getElementById("dealsCard");

const getData = async () =>{
    try{
        let response = await fetch(`https://kfc-backend-app.onrender.com/DEALS`)
        let data = await response.json();                                    
        console.log('data:', data)

        appendData(data)
    //   if(valueINlink[i] == "CHICKEN_BUCKETS"){
    //     //console.log(data)
    //     appendData(data,CHICKEN_BUCKETS)
    //   }
      
    }
    catch(error){
        console.log(error);
    }
}
getData();


const appendData = (data) =>{
    
    dealsCard.innerHTML = null;
    data.forEach((el)=>{

     let card = document.createElement("div");

     let image = document.createElement("img");
     image.setAttribute("class","cardImage");
     image.src = el.image;

     let name = document.createElement("h5");
     name.setAttribute("class","dealsName")
     name.innerHTML = el.name;

     let descriprtion = document.createElement("p");
     descriprtion.setAttribute("class","descriprtion")
     descriprtion.innerHTML = el.description;
     
     let btnsDiv=document.createElement("div");
     btnsDiv.setAttribute("class","btnsDiv")

     let redeemBtn=document.createElement("button");
     redeemBtn.innerText="Redeem";

     redeemBtn.addEventListener("click",()=>{
        redeemCode();

     });

     btnsDiv.append(redeemBtn);

     card.append(image,name,descriprtion,btnsDiv);
     dealsCard.append(card);

    });
}

const redeemCode=()=>{
    window.location.href="./deals.html"
}


let cartBucket=document.querySelector(".navRight img");
cartBucket.addEventListener("click",()=>{
    window.location.href="./cart.html"
})

let navRightCorner=document.getElementById("navRightCorner");
navRightCorner.addEventListener("click",()=>{
    window.location.href="./login.html"
})

let gotoDealsPage=document.querySelector("#menuBtn+h6");
gotoDealsPage.addEventListener("click",()=>{
    window.location.href="./deals.html"
})

// Showing total price

const wallet=document.getElementById("wallet");

const cartdata = async()=>{

    try {
        let res= await fetch (`https://kfc-backend-app.onrender.com/cart`) ;
        let data= await res.json();
        console.log("cartdata",data);
        //For showing the amount;
        let amount = 0;
        for(let i=0; i<data.length; i++){
           
           amount += (+data[i].price);
        }
  
        //The total amount of cart is here now append it where you want;
        console.log(amount);
        wallet.innerHTML = amount; 
  
    } catch (error) {
  
        console.log(error);
    }
  
  }
  cartdata();


// Appending the User name
let UserName = document.querySelector("#navRightCorner");
let name = localStorage.getItem("UserName");
UserName.innerHTML = `Hello ${name}`;
UserName.style.color = "red";