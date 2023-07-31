//import navbar here 

//--------------------------------------

// require('events').EventEmitter.prototype._maxListeners = 100;
//this line of code enables us to add more sections/keys in db.json file
// -------------

const add_products_btn = document.getElementById("add_items");
add_products_btn.onclick = () => {
    event.preventDefault();
    addProducts();
    
};

const update_products_btn = document.getElementById("update_items");
update_products_btn.onclick = () => {
event.preventDefault();
updateProducts();
}

const delete_products_btn= document.getElementById("delete_id_button");
delete_products_btn.onclick = () => {
event.preventDefault();
deleteProducts();
}


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


 let res= await fetch(`https://kfc-backend-app.onrender.com/BOX_MEALS`,{
//these are the 8 local url which needs to be used as required category wise. 
    method:"POST",
    body:JSON.stringify(send_this_data),
    headers: {
        "content-type": 'application/json',
    },


 });
 let data = await res.json();
 console.log('data:', data);


};


//updating products in crud method is patch 
//here always remember url should have /id or /key value to access that particular obj/element in array of objects 
//http://localhost:3000/CHICKEN_BUCKETS/${u_id} like this 
const updateProducts = async () => {
    let u_id=document.getElementById("update_id").value;
    let u_image= document.getElementById("update_image").value; 
    let u_name=document.getElementById("update_name").value;
    let u_vegORnonveg=document.getElementById("update_v/nv").value;
    let u_serves=document.getElementById("update_serves").value;
    let u_price=document.getElementById("update_price").value;
    let u_description=document.getElementById("update_description").value;
    console.log(u_id,u_image,u_name);

    let send_this_updated_data = {
        
            image:u_image,
            name:u_name,
            vegORnonveg:u_vegORnonveg,
            serves:u_serves,
            price:u_price,
            description:u_description
    };

    let res= await fetch(`https://kfc-backend-app.onrender.com/BEVERAGES/${u_id}`,{
        method:`PATCH`,
        body:JSON.stringify(send_this_updated_data),
        headers:{
            "content-type": 'application/json',
        },
    });
    let updated_data= await res.json();
    console.log('updated_data:', updated_data);
};
//now to update an item all the details have to be entered, find how to alter only some even after leaving some inputs empty
//deleting the products -- method is delete 
const deleteProducts = async () => {
    let delete_products_id = document.getElementById("id_delete").value;

    let res= await fetch(`https://kfc-backend-app.onrender.com/CHICKEN_BUCKETS/${delete_products_id}`,{
        method:`DELETE`,
        headers:{
            "content-type": 'application/json',
        },
    });
    let data=await res.json();
    console.log('data:', data);
};

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const PORT = process.env.PORT || 8000
server.use(middlewares)
server.use(router)
server.listen(PORT, () => {
  console.log('JSON Server is running')
})