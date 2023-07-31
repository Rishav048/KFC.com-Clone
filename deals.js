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

const dealsCard=document.getElementById("dealsDivA");
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
     image.setAttribute("class","dealsImage");
     image.src = el.image;

     let cardDiv2 = document.createElement("div");
     cardDiv2.setAttribute("class","cardDiv2")

     let name = document.createElement("h4");
     name.setAttribute("class","nameDeals")
     name.innerHTML = el.name;
     name.style.color="red";
     name.style.fontSize="20px";

     let descriprtion = document.createElement("p");
     descriprtion.setAttribute("class","dealsDescriprtion")
     descriprtion.innerHTML = el.description;
     
     let btnsDiv=document.createElement("div");
     btnsDiv.setAttribute("class","dealBtnsDiv")

     let viewBtn=document.createElement("p");
     viewBtn.innerText="View Details";
     viewBtn.style.textDecoration="underline"
     viewBtn.addEventListener("click",()=>{
        viewDetails(el);
     });

     let redeemBtn=document.createElement("button");
     redeemBtn.innerText="Redeem";

     redeemBtn.addEventListener("click",()=>{
        redeemCode();

     });

     btnsDiv.append(viewBtn,redeemBtn);
     cardDiv2.append(name,descriprtion)
     card.append(image,cardDiv2,btnsDiv);
     dealsCard.append(card);

    });
}

const redeemCode=()=>{
    alert("Redierecting to checkout Page & Enter the PromoCode  'FREE499'")
    window.location.href="./cart.html"
}

let dealsDivA=document.getElementById("dealsDivA")

let veiwDealsData=document.getElementById("veiwDealsData");
veiwDealsData.style.display="none";
const viewDetails=(data)=>{
    veiwDealsData.innerHTML=null;
    //  console.log("in details")
    let div=document.createElement("div");
    div.setAttribute("class","dealsAnji");
    // div.style.backgroundColor="grey";

    let v_image=document.createElement("img");
    v_image.src=data.image;

    let v_name=document.createElement("h4");
    v_name.innerText=data.name;
    v_name.style.color="red";
    v_name.style.fontSize="25px";

    let v_description=document.createElement("p");
    v_description.innerText=data.description;

    window.scrollTo(0,0);

    div.append(v_image,v_name,v_description);
    veiwDealsData.append(div);
    veiwDealsData.style.display="block";
    veiwDealsData.style.marginBottom="-290px"
    dealsDivA.style.visibility="hidden"


}


let dealsAnji=document.querySelector("#veiwDealsData");
dealsAnji.addEventListener("click",()=>{
    dealsDivA.style.visibility="visible"
    veiwDealsData.style.display="none";
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


//   Redirecting to cart page

let cartBucket=document.querySelector(".navRight img");
cartBucket.addEventListener("click",()=>{
    window.location.href="./cart.html"
})

//   Redirecting to login page

let navRightCorner=document.getElementById("navRightCorner");
navRightCorner.addEventListener("click",()=>{
    window.location.href="./login.html"
})


// Deals Page
let gotoDealsPage=document.querySelector("#menuBtn+h6");
gotoDealsPage.addEventListener("click",()=>{
    window.location.href="./deals.html"
})

// Product Page
let goToProducts=document.querySelector("#menuBtn");
goToProducts.addEventListener("click",()=>{
    window.location.href="./product.html"
})


// Appending the User name
let UserName = document.querySelector("#navRightCorner");
 let name = localStorage.getItem("UserName");
 UserName.innerHTML = `Hello ${name}`;
 UserName.style.color = "red";