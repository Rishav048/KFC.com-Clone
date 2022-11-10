//Catching all the divs;

let CHICKEN_BUCKETS = document.querySelector("#CHICKEN_BUCKETS");
let NEW_LAUNCH = document.querySelector("#NEW_LAUNCH");
let BIRYANI_BUCKETS = document.querySelector("#BIRYANI_BUCKETS");
let BOX_MEALS = document.querySelector("#BOX_MEALS");
let BURGERS = document.querySelector("#BURGERS");
let SNACKS = document.querySelector("#SNACKS");
let STAY_HOME_SPECIALS = document.querySelector("#STAY_HOME_SPECIALS");
let BEVERAGES = document.querySelector("#BEVERAGES");



let valueINlink = ["CHICKEN_BUCKETS","NEW_LAUNCH","BIRYANI_BUCKETS","BOX_MEALS","BURGERS","SNACKS","STAY_HOME_SPECIALS","BEVERAGES"];

for(let i=0; i<8; i++){      // This loop is to fetch the data one by one from db.json

const getData = async () =>{
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