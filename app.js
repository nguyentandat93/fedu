const showBtn = document.querySelector(".fa-bars");
const hideBtn = document.querySelector(".fa-times");
const navLinks = document.getElementById("navLinks");

showBtn.addEventListener("click", function(){
	navLinks.style.display = "block";
});

hideBtn.addEventListener("click", function(){
	navLinks.style.display = "none";
})