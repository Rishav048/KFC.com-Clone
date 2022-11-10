//import navbar here 

//--------------------------------------

// require('events').EventEmitter.prototype._maxListeners = 100;
//this line of code enables us to add more sections/keys in db.json file
// -------------

let add_products_btn = document.getElementById("add_items");
add_products_btn.onclick = () => {
    event.preventDefault();
    addProducts();
    
};

const addProducts = async() => {
    let id=document.getElementById("id").value;
    let image= document.getElementById("image").value; 
    let name=document.getElementById("name").value;
    let vegORnonveg=document.getElementById("v/nv").value;
    let serves=document.getElementById("serves").value;
    let price=document.getElementById("price").value;
    let description=document.getElementById("description").value;
    console.log(id,image,name);
   
    let send_this_data = {
            id,
            image,
            name,
            vegORnonveg,
            serves,
            price,
            description
 };

 let res= await fetch(`http://localhost:3000/BOX_MEALS`,{
//   http://localhost:3000/CHICKEN_BUCKETS
//   http://localhost:3000/NEW_LAUNCH
//   http://localhost:3000/BIRYANI_BUCKETS
//   http://localhost:3000/BOX_MEALS
//   http://localhost:3000/BURGERS
//   http://localhost:3000/SNACKS
//   http://localhost:3000/STAY_HOME_SPECIALS
//   http://localhost:3000/BEVERAGES
//these are the 8 local url which needs to be used as required category wise. 
    method:"POST",
    body:JSON.stringify(send_this_data),
    headers: {
        "content-type": 'application/json',
    },


 });
 let data=await res.json();
 console.log('data:', data);


};
