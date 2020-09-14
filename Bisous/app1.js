/*Fixed nav-bar*/

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    //document.body.style.paddingTop = header.offsetHeight + "px";
  } else {
    header.classList.remove("sticky");
    //document.body.style.paddingTop = 0;
  }
}

//Aparitie produse
$(".intro-category").click(function () {
  var $this = $(this);
  ($siblings = $this.parent().children()), (position = $siblings.index($this));
  console.log(position);

  $(".products").removeClass("active").eq(position).addClass("active");

  $siblings.removeClass("active");
  $this.addClass("active");
});

const products = document.querySelectorAll(".products");

products.forEach((product, index) => {
  if (product.style.animation) {
    product.style.animation = "";
  } else {
    product.style.animation = `productsFade 0.8s ease forwards`;
  }
});

/*Burger Menu*/
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-bar");
  const navLinks = document.querySelectorAll(".nav-link");

  burger.addEventListener("click", () => {
    //ToggleNav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.7
        }s`;
      }
    });
    //Burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

/*scroll to products
scrollTo = (element) => {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop,
  });

  console;
};
const categories = document.querySelectorAll(".intro-category");
const products2 = document.querySelectorAll(".products");
const mediaMatch = window.matchMedia("screen and (max-width: 450px)");

if (mediaMatch.matches) {
  for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", () => {
      scrollTo(products2[i]);
    });
  }
}*/

/*Scroll to Top Button*/

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

//Animate

const images = document.querySelectorAll(".anim");
observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim1 1s forwards ease-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});
images.forEach((image) => {
  observer.observe(image);
});
