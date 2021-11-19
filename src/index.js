// Animation d'ouverture et de fermeture, départ, boutons et activations de boutons

$(function () {
  // // Sélection de tous les li enfants + fait la moyenne de tous
  var $mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 2,
    // Tous les éléments images cliquées lance la fonction init
    init = function () {
      bindEvents();
      // Ouverture de départ sur Jessica Alba
      if (validIndex(openedIndex))
        animateItem($mainMenuItems.eq(openedIndex), true, 700);
    },
    bindEvents = function () {
      // Retourne l'index de l'image cliquée en particulier
      $mainMenuItems.children(".images").click(function () {
        var newIndex = $(this).parent().index();
        checkAndAnimateItem(newIndex);
      });

      // Animation couleur interne des boutons survolés à la souris
      $(".button").hover(
        function () {
          $(this).addClass("hovered");
        },
        function () {
          $(this).removeClass("hovered");
        },
      );

      // Animation couleur interne des boutons cliqués avec la souris
      $(".button").click(function () {
        var newIndex = $(this).index();
        checkAndAnimateItem(newIndex);
      });
    },
    validIndex = function (indexToCheck) {
      // Vérification de la validité de l'index
      return indexToCheck >= 0 && indexToCheck < totalMainMenuItems;
    },
    animateItem = function ($item, toOpen, speed) {
      // Cela trouvera et retournera l'image en couleur
      var $colorImage = $item.find(".color"),
        // Opération ternaire
        itemParam = toOpen ? {width: "420px"} : {width: "140px"},
        colorImageParam = toOpen ? {left: "0px"} : {left: "140px"};
      // Animation pour placer l'image colorée devant avec vitesse de déplacement
      $colorImage.animate(colorImageParam, speed);
      $item.animate(itemParam, speed);
    },
    checkAndAnimateItem = function (indexToCheckAndAnimate) {
      // Gestion de la fermeture
      if (openedIndex === indexToCheckAndAnimate) {
        animateItem($mainMenuItems.eq(indexToCheckAndAnimate), false, 250);
        openedIndex = -1;
      } else {
        // Autre niveau de vérification, sinon : gestion de l'ouverture
        if (validIndex(indexToCheckAndAnimate)) {
          // Si un nouvel index s'ouvre, on ferme l'index actuellement ouvert avant
          animateItem($mainMenuItems.eq(openedIndex), false, 250);
          openedIndex = indexToCheckAndAnimate;
          animateItem($mainMenuItems.eq(openedIndex), true, 250);
        }
      }
    };

  init();
});

// fonctions jQuery utilisées : children()/parent(), eq(), find(), animate()
