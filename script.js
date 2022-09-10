let menu = document.querySelector(".menu-bar");
let header = document.querySelector(".header");
let navBar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    navBar.classList.toggle("active");
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

// Sticky

addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
})
