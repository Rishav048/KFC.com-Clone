
document.getElementById("button").addEventListener("click", function(){
    document.getElementById("popup").style.display="flex";
})

document.getElementById("remove").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";
})


document.getElementById("payAdd").addEventListener("click", function(){
    document.getElementById("add").style.display="flex";
})

document.getElementById("PayRemove").addEventListener("click",function(){
    document.querySelector(".add").style.display="none";
})
