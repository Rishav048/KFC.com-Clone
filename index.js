
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

let cDiv=document.getElementById("carosel_inner");



let images=[`https://images.ctfassets.net/wtodlh47qxpt/4wzmNLWjqVZZl95Fcf48r2/90bd1294b970f903545d8f0f5278b28a/Allu_Arjun_Combo_Meal__1440x396px.jpg?w=1536&fit=fill&fm=webp`,`https://images.ctfassets.net/wtodlh47qxpt/7Epy9aFbpyR8YoHuGQF3sZ/01f22a322d491c24121cd4a05a15b45f/KFC_Maggi__Banner__1440x396px_149.jpg?w=1536&fit=fill&fm=webp`,`https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1536&fit=fill&fm=webp`,`https://images.ctfassets.net/wtodlh47qxpt/500GRYvL6xfLzNRY68rr4u/c66030e22aa477594939c55281fc00fd/variety_bucket_banner_1440x396px.jpg?w=1536&fit=fill&fm=webp`,`https://images.ctfassets.net/wtodlh47qxpt/2cKs5e17FbKIE7Dza5ZlNM/e7163ee02d91d59d81a20ecf606f707b/Biryani_Banner_1440x396px.jpg?w=1536&fit=fill&fm=webp`,`https://images.ctfassets.net/wtodlh47qxpt/4qo6xWTWQmjg8ycSRETMU5/649a454a732e77c4cc534524e48bd800/Box_Meals_App_Banner__1440x396px.jpg?w=1536&fit=fill&fm=webp`,`https://images.ctfassets.net/wtodlh47qxpt/4MiZL0wr9Z4ZOTjldWEshT/5ed50dce636025cd535b9344ae820d46/DIP_N_CRUNCH_BANNER_1440x396px.jpg?w=1536&fit=fill&fm=webp`]


let image=document.createElement("img");
 
image.src=images[0]

cDiv.append(image);

let i=1;

setInterval(function(){

    if(i==images.length){
         i=0;
    }

    image.src=images[i];
    cDiv.append(image);

    i++
  },4000);

 
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

    //  let viewBtn=document.createElement("p");
    //  viewBtn.innerText="View Details";
    //  viewBtn.style.textDecoration="underline"

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


let cartBucket=document.getElementById("cartBucket");
cartBucket.addEventListener("click",()=>{
    window.location.href="./cart.html"
})

let navRightCorner=document.getElementById("navRightCorner");
navRightCorner.addEventListener("click",()=>{
    window.location.href="./login.html"
})