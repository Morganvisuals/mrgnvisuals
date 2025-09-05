//navbar animation
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle("active");
}



//formulaire
document.querySelector("form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Empêche la redirection

    const form = e.target;
    const formData = new FormData(form);

    try {
        let response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            // Afficher le message de remerciement
            document.getElementById("thank-you-message").style.display = "block";

            // Réinitialiser le formulaire
            form.reset();

            // Cacher le message après 5 secondes
            setTimeout(() => {
                document.getElementById("thank-you-message").style.display = "none";
            }, 5000);
        } else {
            alert("Une erreur est survenue, veuillez réessayer.");
        }
    } catch (error) {
        alert("Erreur de connexion, vérifiez votre internet.");
    }
});


//fade home

window.addEventListener('load', function() {
    const element = document.getElementById('home');
    
    // Ajouter la classe 'visible' pour démarrer l'animation
    element.classList.add('visible');
});


//fade in
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

