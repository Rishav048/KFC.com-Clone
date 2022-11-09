
function navbar (){

    return`<div id="mainNav">

    <div class="navLeft" >
        <a href="./index.html"><img class="logo" src="https://i.ibb.co/kmCj5FV/KINGS-FRIED-CHICKEN-2.png" alt="logo"></a>
        <h6>Menu</h6>
        <h6>Deals</h6>
    </div>

    <div class="navRight">
        <i class="fa-regular fa-circle-user fa-2x"></i>
        <h4>Sign In</h4>
        <p>|</p>
        <h4 id="wallet">₹ <span>0</span></h4>
        <img src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg" alt="cartImg">
    </div>

</div>`

}

function startDiv(){

    return` <h4>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</h4>
    <button class="startBtn">Start Order</button> `

}

export {navbar,startDiv}