let nav = document.getElementById("Navbar");
let strtdiv = document.getElementById("startDiv");
let footerDiv = document.getElementById("footer");
console.log(footerDiv)

//Importing navbar and startdiv here;
import{navbar,startDiv} from "./Compopnents/navbar.js";
nav.innerHTML = navbar();
strtdiv.innerHTML = startDiv();

//Importing Footer here
import{ footer } from "./Compopnents/footer.js";

footerDiv.innerHTML=footer();

// require('events').EventEmitter.prototype._maxListeners = 100;

//Catching all the divs;

let CHICKEN_BUCKETS = document.querySelector("#CHICKEN_BUCKETS");
let NEW_LAUNCH = document.querySelector("#NEW_LAUNCH");
let BIRYANI_BUCKETS = document.querySelector("#BIRYANI_BUCKETS");
let BOX_MEALS = document.querySelector("#BOX_MEALS");
let BURGERS = document.querySelector("#BURGERS");
let SNACKS = document.querySelector("#SNACKS");
let STAY_HOME_SPECIALS = document.querySelector("#STAY_HOME_SPECIALS");
let BEVERAGES = document.querySelector("#BEVERAGES");

//   Catching Loader div and setting it for 3 second 
let loader = document.getElementById("loader_div");  
setTimeout(()=>{
  loader.style.display = "none";
},3200)
//**************************************************//


let valueINlink = ["CHICKEN_BUCKETS","NEW_LAUNCH","BIRYANI_BUCKETS","BOX_MEALS","BURGERS","SNACKS","STAY_HOME_SPECIALS","BEVERAGES"];

for(let i=0; i<8; i++){      // This loop is to fetch the data one by one from db.json

const getData = async (v) =>{
    try{
        let response = await fetch(`http://localhost:3000/${valueINlink[i]}`)
        let data = await response.json();                                    
      //  console.log(data)
      if(valueINlink[i] == "CHICKEN_BUCKETS"){
        //console.log(data)
        appendData(data,CHICKEN_BUCKETS)
      }
      else if(valueINlink[i] == "NEW_LAUNCH"){
        //console.log(data)
        appendData(data,NEW_LAUNCH)
      }
      else if(valueINlink[i] == "BIRYANI_BUCKETS"){
        //console.log(data)
        appendData(data,BIRYANI_BUCKETS)
      }
      else if(valueINlink[i] == "BOX_MEALS"){
       // console.log(data)
       appendData(data,BOX_MEALS)
      }
      else if(valueINlink[i] == "BURGERS"){
       // console.log(data)
       appendData(data,BURGERS)
      }
      else if(valueINlink[i] == "SNACKS"){
       // console.log(data)
       appendData(data,SNACKS)
      }
      else if(valueINlink[i] == "STAY_HOME_SPECIALS"){
       // console.log(data)
       appendData(data,STAY_HOME_SPECIALS)
      }
      else if(valueINlink[i] == "BEVERAGES"){
       appendData(data,BEVERAGES)
       
      }
      
    }
    catch(error){
        console.log(error);
    }
}
getData();
}



const appendData = (data,container) =>{
    
    container.innerHTML = null;
    data.forEach((el)=>{
     let card = document.createElement("div");
     let image = document.createElement("img");
     image.setAttribute("class","cardImg");
     image.src = el.image;
     let name = document.createElement("p");
     name.setAttribute("class","Cardname")
     name.innerHTML = el.name;
     let icondiv = document.createElement("div");
     icondiv.setAttribute("class","icondiv");
     let icon = document.createElement("img");
     icon.setAttribute("class","icon");
     if(el.vegORnonveg == "Non-Veg"){
        icon.src = "https://online.kfc.co.in/static/media/Non_veg_dot_Icon.d975d1f9.svg"
     }
     else{
        icon.src = "https://online.kfc.co.in/static/media/Veg_dot_Icon.d1a3902d.svg"
     }

     let vegORnonveg = document.createElement("p");
     vegORnonveg.setAttribute("class","Cardveg");
     vegORnonveg.innerHTML = el.vegORnonveg;
     let serves = document.createElement("p");
     serves.setAttribute("class","Cardserves");
     serves.innerHTML = `•${el.serves}`;
     let content_div =document.createElement("div");
     content_div.setAttribute("class","content_div");
     let price = document.createElement("p");
     price.setAttribute("class","Cardprice");
     price.innerHTML = `₹${el.price}`;
     let description = document.createElement("p");
     description.setAttribute("class","Carddescription")
     description.innerHTML = el.description;
     let btnimg = document.createElement("img");
     btnimg.src = "https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
     btnimg.setAttribute("class","btnimg");
     let addbtn = document.createElement("button");
     addbtn.setAttribute("class","add_to_cart");
     addbtn.setAttribute("id","idaddtocart")
     addbtn.innerHTML =`Add to Cart`;
     addbtn.addEventListener("click",() =>{
              addToCart(el);
     })
     addbtn.append(btnimg)
     let btndiv = document.createElement("div");
     btndiv.setAttribute("class","btndiv");
     btndiv.append(addbtn)
     content_div.append(price,description)
     icondiv.append(icon,vegORnonveg,serves)
     card.append(image,name,icondiv,content_div,btndiv);
     container.append(card)

    })
}


// ************** ADD TO CART *****************
let itemcount = document.getElementById("ContItems");
let priceupdate = document.getElementById("wallet");

// Showing Cart array.length to show the count of item added;
//Showing amount according to db.json;
const cartdata = async()=>{

  try {
      let res= await fetch (`http://localhost:3000/cart`) ;
      let data= await res.json();
      console.log("cartdata",data);
      itemcount.innerHTML = (data.length);
      //For showing the amount;
      let amount = 0;
      for(let i=0; i<data.length; i++){
         
         amount += (+data[i].price);
      }

      //The total amount of cart is here now append it where you want;
      console.log(amount);
      priceupdate.innerHTML = amount; 

  } catch (error) {

      console.log(error);
  }

}
cartdata();



//Storing and geting the Price and itemscount of the cart
let totalprice = +(localStorage.getItem("addedprice") || 0);

//This is for appending the price


//This is for appending the itemcount



const addToCart = async (el) =>{
    el.id = null;
    let btn = document.getElementById("idaddtocart");
    btn.innerHTML = "ITEM ADDED TO CART"
    // btn.disabled = true;
    // btn.style.backgroundColor = "blue";
    // btn.style.borderRadius = "0px"
    
    

   try{
   let response  = await fetch(`http://localhost:3000/cart`,{
    method:"POST",
    body:JSON.stringify(el),
    headers:{
      "content-type" : "application/json"
    },
   });

   let data = await response.json();
   console.log(data);

   }
   catch(e){
    console.log(e)
   }
}

//Search funtonallity (It will search according to value in all array and the rest divs will be null);
// let valueINlink = ["CHICKEN_BUCKETS","NEW_LAUNCH","BIRYANI_BUCKETS","BOX_MEALS","BURGERS","SNACKS","STAY_HOME_SPECIALS","BEVERAGES"];
let Searcharr = [];
for(let i=0; i<8; i++){ 
const searchitems = async() =>{
  try{
    let value = document.getElementById("search").value;
  // console.log(value)
  let res = await fetch(`http://localhost:3000/${valueINlink[i]}?q=${value}`);
  let data = await res.json();
 
  console.log(data);
  if(data.length !== 0){
   // console.log("data",data);
    for(let j=0; j<data.length; j++){
      Searcharr.push(data[j]);
    }
    
  }
  let newtext = document.getElementById("changetext");  //Catching the h tag which text should be changed on search
  if(i==7 && Searcharr.length == 0){
    // console.log(Searcharr.length)
    CHICKEN_BUCKETS.innerHTML = null;
    newtext.innerHTML ="<img src=\'https://pbs.twimg.com/media/DDPKLHNVwAA87D5.jpg' width=\'100%\' height=\'380px\'>";
    setTimeout(()=>{
      newtext.innerHTML = "Returning to menu..╰┈➤╰┈➤╰┈➤╰┈➤";
      newtext.style.fontSize = "30px";
      newtext.style.color = "red";

               setTimeout(()=>{
                 window.location.reload();
                 },2000)
    },2000)

  }
  else if(i==7 && Searcharr.length !== 0){
     //console.log(Searcharr)
     newtext.innerHTML =`Total "${Searcharr.length}" results found for "${value}"`
     newtext.style.fontSize = "30px";
     newtext.style.color = "red";
    appendData(Searcharr,CHICKEN_BUCKETS);
  }
  
 
 
  }
  catch(e){
    console.log(e);
  }
}

// Invoke Search Function onkeydown

let searchEnter = document.getElementById("search");
searchEnter.addEventListener("keydown",(event)=>{
  
  if(event.key == "Enter"){
    console.log(event.key)
    searchitems()
  }
  // console.log(event.key)
})
}


// Adding scroll div function
// Class name catches array so for loop is needed;

let scrolldivs = document.getElementsByClassName("clickscroll");
//console.log(scrolldivs)
let adjustDiv = document.getElementsByClassName("adjustDiv");
// for(let i=0; i<adjustDiv; i++){
// adjustDiv[i].style.display = "none";
// //console.log(adjustDiv)
// }

for (var i = 0 ; i < scrolldivs.length; i++) {
  
  scrolldivs[i].addEventListener( "click", ()=>{
    //console.log("invoked")
     for(let j=0; j<adjustDiv.length; j++){
      adjustDiv[j].style.display = "block";
     }
  }) 
 
}


//

// Sorting function;

let lowToHigh = document.getElementById("acc");  //catching the buttons and adding onclick
lowToHigh.addEventListener("click", ()=>{
     let value = "acc"
     sortingitems(value);
})

let HighToLow = document.getElementById("dec");
HighToLow.addEventListener("click",()=>{
     let value = "dec"
     sortingitems(value);
})

// let valueINlink = ["CHICKEN_BUCKETS","NEW_LAUNCH","BIRYANI_BUCKETS","BOX_MEALS","BURGERS","SNACKS","STAY_HOME_SPECIALS","BEVERAGES"];
let shorArr = [];
let newtext = document.getElementById("changetext");
const sortingitems = async(value)=>{
  
  console.log(value)
  for(let i=0; i<8; i++){
  let res = await fetch(`http://localhost:3000/${valueINlink[i]}?_sort=price&_order=${value}`);
   let data = await res.json();
   //console.log("data",data);
   for(let j=0; j<data.length; j++){
    shorArr.push(data[j]);
   }
  }
  
  if(value == "acc"){
    shorArr.sort((a,b)=>{
      return a.price - b.price;
    })
    console.log(shorArr)
    newtext.innerHTML = "(¯`◕‿◕´¯)_______________LOW ➠ HIGH_______________(¯`◕‿◕´¯)";
    newtext.style.fontSize = "25px";
     newtext.style.color = "red";

    appendData(shorArr,CHICKEN_BUCKETS)
    
  }
  else{
    shorArr.sort((a,b)=>{
      return b.price - a.price;
    })
    console.log(shorArr)
    appendData(shorArr,CHICKEN_BUCKETS)
    newtext.innerHTML = "(¯`◕‿◕´¯)_______________HIGH ➠ LOW_______________(¯`◕‿◕´¯)";
    newtext.style.fontSize = "25px";
     newtext.style.color = "red";
  }
  
}


// Go TO Cart page

let cartPage = document.querySelector(".navRight>img");
 cartPage.onclick = ()=>{
   window.location.href ="./cart.html"
 }

// Go to HomePage

let HomePage = document.querySelector(".navLeft>h6:last-child");
console.log(HomePage)  //Catching the h6 --> Deals
 HomePage.onclick = ()=>{
   window.location.href ="./deals.html"
 }