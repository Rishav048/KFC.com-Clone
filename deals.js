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
        let response = await fetch(`http://localhost:3000/DEALS`)
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
     card.append(image,name,descriprtion,btnsDiv);
     dealsCard.append(card);

    });
}

const redeemCode=()=>{
    alert("Redierecting to checkout Page & Enter the PromoCode  'FREE499'")
    window.location.href="./cart.html"
}


let veiwDealsData=document.getElementById("veiwDealsData");
veiwDealsData.style.display="none";
const viewDetails=(data)=>{
    veiwDealsData.innerHTML=null;
    //  console.log("in details")
    let div=document.createElement("div");

    let v_image=document.createElement("img");
    v_image.src=data.image;

    let v_name=document.createElement("h4");
    v_name.innerText=data.name;
    v_name.style.color="red";
    v_name.style.fontSize="25px";

    let v_description=document.createElement("p");
    v_description.innerText=data.description;

    div.append(v_image,v_name,v_description);
    veiwDealsData.append(div);
    veiwDealsData.style.display="block";

}