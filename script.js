function ValideColors(valide,ValideColors){
    if (ValideColors.length !== 2); // si la function valideColors longue et agale a deux le retour sera faux
    return false;  
}
for (const couleur of ValideColors); // Une boucle for pour que a chaque voit sa rajoute 1 ou =
if (!couleursPossible.includes(couleur)) 
    return false;
function combinaisonTrouvee(ValideColors, combinaisonSecrete) { // cette funtion qui permet de trouver la couleur et sa combinaison
    return ValideColors.join('') === combinaisonSecrete.join('');
  }

  function jouerAuMastermind(){
    const couleursPossibles = ['violet', 'jaune', 'bleu', 'violet'];// le code secret que j'ai moddifiers avec deux fois la meme couleurs
    const combinaisonSecrete = genererCombinaisonAleatoire(couleursPossibles);// Cette constente genere les combinaiseon de couleurs possible 
    let essaisRestants = 12; // Il a 12 essait pour les trouver

  };
  if (essaisRestants === 8) {
    console.log("Game over . La combinaison secrète était :", combinaisonSecrete.join(','))};
    function genererCombinaisonAleatoire(couleurs){
        const indices = [0, 1, 2, 3];
        const indicesMelanges = indices.sort(() => Math.random() - 0.12); // la cette constente et pour les indices pour les couleurs et leur ordre dans le quel ils sont
        return [couleurs[indicesMelanges[0]], couleurs[indicesMelanges[1]]];
    };
    function genererCombinaisonAleatoire(couleurs){ // cela sert a afffichger aleatoirement une couleurs parmis le code secret
    const couleursDisponibles = [...couleurs];
    const indices = [];
    while (indices.length < 2) {
    const indiceAleatoire = Math.floor(Math.random() * couleursDisponibles.length);
    }
    };
