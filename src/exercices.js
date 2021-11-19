// Quand doc prêt, exécute fonction, in Vanilla JS : document.addEventListener('DOMContentLoaded', function () {}, false);
$(document).ready(function () {
  // Animation : bouton actionne div
  $(function () {
    $("#start").click(function () {
      $(".div1")
        .slideUp(1500)
        .slideDown(1500)
        .fadeOut(1500)
        .fadeIn(1500)
        .animate(
          {
            left: "900px",
            opacity: 0.1,
            width: "50px",
            height: "50px",
          }, // Ligne par ligne, les animations se ferait une par une
          1500,
          function () {
            $(".div1").hide();
          },
        );

      $("#stop").click(function () {
        $(".div1").stop(); // plusieurs true en paramètres pour gestion de l'arrêt
      });
    });
  });

  $(".par1").hide(); // Désigner un élément, fonction pour cacher, classe du paragraphe1

  // Survoler fait disparaître, puis revenir... :
  $(function () {
    $("#p1").hover(
      function () {
        $("#p5").hide("slow");
      },
      function () {
        $("#p5").show();
      },
    );
  }); // fonction on + click similaire, hide et show sont des fonctions d'effet, paramètre slow, 3000 ou fast pour ralentir/accélérer la disparition

  $(function () {
    $("#p1").click(function () {
      // Opacité avec délai
      $("#p3").fadeTo(2500, 0.4, function () {
        $("#p4").fadeToggle(2500); // Click aller et retour, encapsulement
      });
    });
  });
  // fadeIn/fadeOut opacité change de 1 à 0, fadetoggle ou toggle affiche/invisibilise.

  // Clique et ajout de texte
  $(function () {
    $("#button").click(function () {
      let myVar = $("#myInput").val();
      console.log(myVar); // Ajout in console F12
      $(".div2").append("<p>New Lorem ipsum</p>"); // prepend, before, remove, empty...
    });
  });
});
