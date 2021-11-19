/*

MES NOTES - jQuery, librairie JavaScript :

jQuery est une bibliotèque JavaScript qui permet de faire plus en écrivant moins : manipuler les éléments HTML, décorer le style CSS, ajouter des effets/animations parfois en une seule ligne au lieu de rédiger plusieurs paragraphes de code.
Elle est très connue, mais n'est en revanche pas la plus optimisée des librairies à ce jour.

$ npm init --yes
$ npm install jquery
$ bower install jquery (dernière version)
$ Ou enregistrer fichier minimiser ou non : https://jquery.com/download/
$ Ou lien serveur en ligne (CDN) : <script src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

JS et jQuery :
$ désigne élément
# désigne ID
. désigne classe

AJAX : récupérer toutes les données de notre page web sans recharger son intégralité en ciblant certaines données. jQuery possède un bon nombre de fonctions pour ce faire. La fonction .load notamment pour envoyer le fichier d'un serveur (demo.txt) en ajoutant par exemple son contenu dans un div de notre code.

BROUILLON :
// Résultat possible avec .mouseenter ou .mouseleave à la place de .click
// vanilla JS : document.getElementById('elementID').onclick = function(){}
//   $("p:nth-child(3)").hide(); // Cache le 2e paragraphe
// Class CSS in JS jQuery : $("#text1").addClass("yellow");, removeClass.
// Arborescence : .parent, .parents, children, find("p"), siblings() pour frères ayant mêmes parent(s), frère suivant c'est .next, etc.
*/
