let nav = document.getElementById("Navbar");
let strtdiv = document.getElementById("startDiv");

// import{navbar,startDiv} from "./Compopnents/navbar.js";
// nav.innerHTML = navbar();
// strtdiv.innerHTML = startDiv();


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

//Storing and geting the Price and itemscount of the cart
let productCount = localStorage.getItem("count") || 0;
let totalprice = +(localStorage.getItem("addedprice") || 0);

//This is for appending the price
// let priceupdate = document.getElementById("wallet");
// priceupdate.innerHTML = totalprice;

//This is for appending the itemcount
let itemcount = document.getElementById("ContItems");
itemcount.innerHTML = productCount;


const addToCart = async (el) =>{
    el.id = null;
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
   productCount++;
   localStorage.setItem("count",productCount);
   let amount = totalprice + (+el.price)
   localStorage.setItem("addedprice",amount)
   }
   catch(e){
    console.log(e)
   }
}

//Seach funtonallity (It will search according to value in all array and the rest divs will be null);
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

let searchicon = document.getElementById("tap");
searchicon.addEventListener("click",()=>{
  console.log("invoked Search");
  searchitems()
})
}


// Adding scroll div function

let scrolldivs = document.getElementsByClassName("clickscroll");
console.log(scrolldivs)
let adjustDiv = document.getElementsByClassName("adjustDiv");
adjustDiv[0].style.display = "none";
console.log(adjustDiv)


for (var i = 0 ; i < scrolldivs.length; i++) {

  scrolldivs[i].addEventListener( "click", ()=>{
    console.log("invoked")
    adjustDiv[0].style.display = "block";
  }) 
 
}