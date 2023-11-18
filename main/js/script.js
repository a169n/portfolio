AOS.init();


const scrollToTopBtn = document.querySelector("#scrollToTopArrow");

scrollToTopBtn.addEventListener("click", () => {
     window.scrollTo(0, 0);
})

function toggleWorkSection() {
     var workImagesContainer = document.querySelector(".works");
     workImagesContainer.classList.toggle("show");

     if (workImagesContainer.classList.contains("show")) {
          var worksSection = document.querySelector(".hero-section");
          worksSection.scrollIntoView({
               behavior: 'smooth'
          });
     }
}