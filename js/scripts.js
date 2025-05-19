window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  //  Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector("#aboutUsCarousel");
  const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);
  const totalSlides = document.querySelectorAll(".carousel-item").length;

  function getMaxSlideIndex() {
    if (window.innerWidth >= 992) {
      return 1;
    } else if (window.innerWidth >= 768) {
      return 2;
    } else {
      return totalSlides - 1;
    }
  }

  carousel.addEventListener("slide.bs.carousel", function (event) {
    const maxSlideIndex = getMaxSlideIndex();
    const nextIndex = event.to;

    if (nextIndex > maxSlideIndex) {
      event.preventDefault();
      carouselInstance.to(0);
    }
    if (nextIndex < 0) {
      event.preventDefault();
      carouselInstance.to(maxSlideIndex);
    }
  });

  window.addEventListener("resize", function () {
    carouselInstance.cycle(); // Karuselni qayta ishga tushirish
  });
});
