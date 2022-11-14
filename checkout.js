
document.getElementById("button").addEventListener("click", function(){
    document.getElementById("popup").style.display="flex";
})

document.getElementById("remove").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";
})

document.getElementById("b").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";
})


// document.getElementById("payment").addEventListener("click", function()
// {
    
//     document.getElementById("add").style.display="flex";
// })


//     document.getElementById("PayRemove").addEventListener("click",function(){
//         document.querySelector(".add").style.display="none";
//     })





 function salected(){
    let upi=document.getElementById("UPI").checked;

    console.log(upi);
     if(upi==true){
            document.querySelector("#up").style.display="flex";
     }

    let netbank=document.getElementById("Net-Banking").checked;
       

    let debit=document.getElementById("Debit-Card").checked;

    let credit=document.getElementById("Credit-Card").checked;

    let payon=document.getElementById("Pay-on-Delivery").checked;

    let cash=document.getElementById("Cash").checked;

    
        
     
 }


// append data of change address


function add(p,a,d,t){
this.pikup=p;
this.address=a;
this.date=d;
this.time=t;
}

document.getElementById("b").addEventListener("click" , bbbb)

function bbbb(){

    let pikup=document.getElementById("pikup").value

    // document.getElementById("pikup").value=""

    let address=document.getElementById("address").value
    //  address.style.width="30px"

    // document.getElementById("address").value=""


    let date=document.getElementById("date").value

    // document.getElementById("date").value=""
  
    let time=document.getElementById("time").value

    // document.getElementById("time").value=""
 
    let p1=new add(pikup,address,date,time);
    
   

    localStorage.setItem("data",JSON.stringify(p1));

   v()

    
}

function v(){
    
    let appData=JSON.parse(localStorage.getItem("data"));

    
    console.log(appData);
    
    
    
   let div=document.getElementById("c")
   div.innerHTML=null

        let add=document.createElement("h3")
        add.innerText=appData.address;
        add.style.width="20px"
       let img=document.createElement("img")
       img.url="https://online.kfc.co.in/static/media/WatchLater.3ca73ea2.svg"
       
       let atdiv=document.createElement("div");

        let date=document.createElement("h4")
        date.innerText=appData.date
    
        let time=document.createElement("p")
        time.innerText=appData.time;

        atdiv.append(date,time)

        div.append(img,add,atdiv)
    
    

}

v()



//     Upi pay ***************************//

document.getElementById("Pay-option").addEventListener("click" ,addpayotion)

function addpayotion(){

    let x=document.getElementById("Pay-option").value
    
    
    if(x=="UPI"){
document.getElementById("card").addEventListener("click", function(){
    document.getElementById("upipay").style.display="flex";
   
})

    }

    if(x=="Credit_Card"){
        document.getElementById("card").addEventListener("click", function(){
            document.getElementById("creditpay").style.display="flex";
        })
            }
    
}

document.getElementById("paybutt").addEventListener("click",function(){
    document.querySelector("#upipay").style.display="none";
    alert("Order Successful")
    window.location.reload()
})


    
document.getElementById("credpay").addEventListener("click",function(){
    document.querySelector("#creditpay").style.display="none";
    alert("Order Successful")
    window.location.reload()
})





// coninfo                                   //

function con(){
    let coninfo=JSON.parse(localStorage.getItem(""));

    
}

// last pay*******  //

function last(){

    let sub=JSON.parse(localStorage.getItem("sub_total"))

    console.log(sub)
    
    document.getElementById("subtotal").innerHTML=sub;

    let gst=JSON.parse(localStorage.getItem("gst"))

     document.getElementById("gst").innerHTML=gst;

     let sum=sub+gst+5;

     document.getElementById("total").innerHTML=sum;

}


last()

// back to cart

document.getElementById("back-to-Cart").addEventListener("click" ,()=>{
window.location.href="cart.html"

console.log("hello")
})