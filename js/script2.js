//navbar animation
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle("active");
}


document.querySelectorAll("a").forEach(link => {
    link.addEventListener("mouseover", () => {
        document.querySelector(".cursor").style.transform = "scale(2)";
        document.querySelector(".cursor").style.backgroundColor = "white";
    });
    link.addEventListener("mouseleave", () => {
        document.querySelector(".cursor").style.transform = "scale(1)";
        document.querySelector(".cursor").style.backgroundColor = "var(--main-color)";
    });
});

//fade
document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll(".fade-in");

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("show");
      entry.target.classList.remove("hidden");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
