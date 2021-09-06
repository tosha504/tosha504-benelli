window.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger"),
    headerNav = document.querySelector(".header__nav"),
    main = document.querySelector(".main-screen"),
    headerBtn = document.querySelector(".header__btn"),
    header = document.querySelector(".header"),
    dialog = document.querySelector(".dialog"),
    html = document.querySelector("html"),
    tabs = document.querySelectorAll(".services__column-items");

  window.addEventListener("scroll", function() {
    if (this.scrollY > 20) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  headerBtn.addEventListener("click", function() {
    dialog.classList.add("active");
  });

  document
    .querySelector(".dialog__close")
    .addEventListener("click", function() {
      dialog.classList.remove("active");
    });

  function opacity() {
    header.classList.add("opacity");
    main.classList.add("opacity");
  }
  opacity();

  burger.addEventListener("click", function() {
    headerNav.classList.toggle("active");
    burger.classList.toggle("active");
    html.classList.toggle("fixed-page");
  });

  function log() {
    tabs.forEach((tab) => {
      tab.addEventListener("click", function(e, i) {
        console.log(tabs);
        tab.classList.toggle("active");
        tab.classList.toggle("active");
      });
    });
  }
  log();

  //   drop.addEventListener("click", function(e) {

  //     // 	  .classList.toggle("active");
  //     // document.querySelector(".services__item-text").classList.toggle("active");
  //   });

  //   function hideTabContent() {
  //     tabs.forEach((item) => {
  //       console.log(item.target);
  //       item.style.display = "none";
  //     });

  //     //     document
  //     //       .querySelector(".services__column-items")
  //     //       .addEventListener("click", function() {
  //     //         this.classList.toggle("active");
  //     //         document
  //     //           .querySelector(".services__item-text")
  //     //           .classList.toggle("active");
  //     //         //     // .slideToggle(300);
  //     //       });
  //   }
  //   hideTabContent();
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
});
