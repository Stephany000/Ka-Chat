document.querySelector("#show-Signup").addEventListener("click",function(){
    document.querySelector(".modal-signup").classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click",function(){
    document.querySelector(".modal-signup").classList.remove("active");
});