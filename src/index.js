window.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger"),
    headerNav = document.querySelector(".header__nav"),
    main = document.querySelector(".main-screen"),
    headerBtn = document.querySelector(".header__btn"),
    header = document.querySelector(".header"),
    dialog = document.querySelector(".dialog"),
    html = document.querySelector("html"),
    anchors = document.querySelectorAll('a[href*="#"]');

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

  const deadLine = "2022-12-13";

  function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInerval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInerval);
      }
    }
  }

  setClock(".time", deadLine);
});
