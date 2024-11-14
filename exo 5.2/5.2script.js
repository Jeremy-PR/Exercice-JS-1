let premierNombre = prompt (34,67);
let deuxiemeNombre = prompt (67,56);

premierNombre = Number(premierNombre);
deuxiemeNombre = Number(deuxiemeNombre);


let partieEntierePremierNombre = Math.floor(premierNombre);


let resultat = partieEntierePremierNombre * deuxiemeNombre;


alert("Le résultat de la multiplication est : " + resultat);