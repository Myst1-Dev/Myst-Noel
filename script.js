
window.onscroll = function() {myFunction()};

var header = document.getElementById("MyHeader");

var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }



  $(document).ready(function(){
    $("#menu").click(function(){
      $(this).toggleClass("fa-times");
      $(".navbar").toggleClass("nav-toggle");
    });
});



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
