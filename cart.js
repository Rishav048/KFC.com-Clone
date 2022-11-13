import {navbar} from "./Compopnents/navbarcart.js";

let nav=document.getElementById("navbar");
nav.innerHTML = navbar();

import {footer} from "./Compopnents/footer.js";

let foot=document.getElementById("footer");
foot.innerHTML = footer();


let container = document.getElementById("container");
let popular_add_on=document.getElementById("popular_add_on");
let empty_cart=document.getElementById("emptycart");
let lovethese=document.getElementById("lovethese");
let large_carry_bag =document.getElementById("large_carry_bag");
let add_hope =document.getElementById("add_hope");
large_carry_bag.style.display="none";
add_hope.style.display="none";




const cart = async()=>{

    try {
        let res= await fetch (`http://localhost:3000/cart`) ;
        let data= await res.json();
        console.log(data);
        append_items(data); 

    } catch (error) {

        console.log(error);
    }

}

cart();


let n=0;


const append_items = (data)=>{

    n=data.length;
    if(data.length==0)
    {
       
        container.style.display="none";
        
        popular_add_on.style.display="none";
        
        empty_cart.style.display="block";
        
        lovethese.style.display="block";
    }
    
    let box_item=document.getElementById("box_item");
    box_item.innerHTML=null;
    let count=1;
    let count2=0;
    let subtotal=0;
    let lcb=0;
    let hope=0;
    let checkout=document.getElementById("total");
    data.forEach((el)=>{
      
        subtotal+=+el.price;
       count2++;
        let item_div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;
        let lhs_div = document.createElement("div");
        let mid_div=document.createElement("div");
        let h1=document.createElement("h1");
        h1.innerText=el.name;
        let remove_btn=document.createElement("button");
        remove_btn.innerText="Remove";
        remove_btn.setAttribute("class","rem_btn");
        remove_btn.onclick=async()=>{
            try {
                let res = await fetch (`http://localhost:3000/cart/${el.id}` ,{
            
                    method:'DELETE',
                    
                    headers: {
                        'Content-Type':'application/json',
                    },
                    
                      });
                    
                      let data = await res.json();
                      console.log('data:',data);
            } catch (error) {
                
                console.log('err:',error);
            }
        }

        let rhs_div =document.createElement("div");
        let min_btn= document.createElement("button");
       min_btn.innerHTML=`<div>-</div>`
        min_btn.setAttribute("class","min_btn");
        min_btn.onclick=()=>{
            subtotal-=+el.price;
            count2--;
           
            if(count2<0)
            {
                count2=0;
            }
            h3.innerText--;
            if(h3.innerText<0)
            {
                h3.innerText=0;
               
            }
            if(h3.innerText==1)
            {
                min_btn.disabled=true;
               
            }
            else if(h3.innerText>1)
            {
                min_btn.disabled=false;
            }
            total_item.innerText=count2;
            noi.innerText=count2;
            subTotal.innerText=subtotal;
            GST = (subtotal*15)/100;
            gst.innerText= GST;
            checkout.innerText= subtotal+GST+lcb+hope;
            wallet.innerText=subtotal;
            localStorage.setItem("sub_total",subtotal);
            localStorage.setItem("gst",GST);
        }
        let h3=document.createElement("h3");
        h3.innerText=count;
        if(h3.innerText==1)
        {
            min_btn.disabled=true;
            
           
        }
        else if(h3.innerText>1)
        {
            min_btn.disabled=false;
        }
        let max_btn=document.createElement("button");
        max_btn.innerHTML=`<div>+</div>`;
        max_btn.setAttribute("class","max_btn");
        max_btn.onclick=()=> {
            subtotal+=+el.price;
            count2++;
            h3.innerText++;
            if(h3.innerText==1)
            {
                min_btn.disabled=true;
                
            }
            else if(h3.innerText>1)
            {
                min_btn.disabled=false;
            }
            total_item.innerText=count2;
            noi.innerText=count2;
            subTotal.innerText=subtotal;
            GST = (subtotal*15)/100;
            gst.innerText= GST;
            wallet.innerText=subtotal;
           checkout.innerText= subtotal+GST+lcb+hope;
           localStorage.setItem("sub_total",subtotal);
           localStorage.setItem("gst",GST);
        }
        let p =document.createElement("p");
        p.innerText= "₹"+el.price;

       mid_div.append(h1,remove_btn);
       lhs_div.append(img,mid_div);
       rhs_div.append(min_btn,h3,max_btn,p);
       item_div.append(lhs_div,rhs_div);
       box_item.append(item_div);


    }) 
    
    let total_item=document.getElementById("total_items");
    total_item.innerText=count2;

   let carry_bag=document.getElementById("carry_bag");
   carry_bag.onchange=(event)=>{
    if(event.target.checked)
    {
        large_carry_bag.style.display="flex";
        lcb =6;
        checkout.innerText= subtotal+GST+lcb+hope;
    }
    else
    {
        large_carry_bag.style.display="none";
        lcb =0;
        checkout.innerText= subtotal+GST+lcb+hope;
    }
  
   }
  
   let donate = document.getElementById("donate");
   donate.onchange=(event)=>{
    if(event.target.checked)
    {
        add_hope.style.display="flex";
        hope=5;
        checkout.innerText= subtotal+GST+lcb+hope;
    }
    else{
        add_hope.style.display="none";
        hope=0;
        checkout.innerText= subtotal+GST+lcb+hope;
    }
   
   }
    
   let noi =document.getElementById("noi");
   noi.innerText=count2;

    let GST = (subtotal*15)/100;
   let subTotal=document.getElementById("subtotal");
   subTotal.innerText=subtotal;
   let wallet=document.getElementById("wallet");
   wallet.innerText=subtotal;
   let gst = document.getElementById("gst");
   gst.innerText= GST;
   
   checkout.innerText= subtotal+GST+lcb+hope;
   localStorage.setItem("sub_total",subtotal);
            localStorage.setItem("gst",GST);
}


let arr_id=[];

let remove_all = document.getElementById("remove_all");
remove_all.onclick = async()=>{


    container.style.display="none";
        
    popular_add_on.style.display="none";
    
    empty_cart.style.display="block";
    
    lovethese.style.display="block";

   



    try {
        let res = await fetch (`http://localhost:3000/cart`)
    
            
              let data = await res.json();
             
              console.log('data:',data);
      for(let i=0;i<data.length;i++)
      {
        arr_id.push(data[i].id);
      }

    } catch (error) {
        
        console.log('err:',error);
    }
    
    for(let i=0;i<arr_id.length;i++)
{
remove_all_data(arr_id[i]);
}


 

}


console.log(arr_id);



    const remove_all_data =async(id)=>{
        try {
            let res = await fetch (`http://localhost:3000/cart/${id}` ,{
        
                method:'DELETE',
                
                headers: {
                    'Content-Type':'application/json',
                },
                
                  });
                
                  let data = await res.json();
                  console.log('data:',data);
        } catch (error) {
            
            console.log('err:',error);
        }
  
    }




    // Appending the User name
let UserName = document.querySelector("#navRightCorner");
let name = localStorage.getItem("UserName");
UserName.innerHTML = `Hello ${name}`;
UserName.style.color = "red";



let check_out =document.getElementById("checkout");
check_out.onclick=()=>{
    window.location.href="./checkout.html";

}


let more_menu =document.getElementById("add_more_menu");
more_menu.onclick=()=>{
  
   window.location.href="./product.html";
}

let menu = document.getElementById("menubtn");
menu.onclick=()=>{
    window.location.href="./index.html";
}

let deals =document.getElementById("deals");
deals.onclick=()=>{
    window.location.href="./deals.html";
}