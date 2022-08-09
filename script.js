let menu = document.querySelector(".menu-bar");
let header = document.querySelector(".header");


menu.addEventListener("click", () => {
    header.classList.toggle("active");
    menu.classList.toggle("fa-times");
})

// lightbox //


document.querySelectorAll(".image-container img").forEach(image =>{

    // document.querySelector(".popup-image").style.display = "block";
    image.onclick = () => {
     document.querySelector(".popup-image").style.display = "block";
     document.querySelector(".popup-image img").src = image.getAttribute("src");
    }
   
   });
   
   document.querySelector(".popup-image span").onclick = () => {
     document.querySelector(".popup-image").style.display = "none";
   }
