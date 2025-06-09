
function searchGuess(arr, val){ return arr.indexOf(val) }

function guess(partyGuess){

    let tab = [];
    partyGuess = Number(prompt("Combien de tour voulez vous faire ?"))
    for(let i = 0; i < partyGuess; i = i + 1){
    let countGuess = String(prompt("Ajouter " + partyGuess + " mots du pendu !"))
    tab.push(countGuess) }

    let tabs = [], 
        // Rehcherche de nombre de mots aléatoires 
        robots = Math.floor(Math.random() * partyGuess),
        // Le robot va choisir le mot aléatoires dans la boite de dialogue.
        stockGuess = Array.from(tab[robots]); stockGuess;
        // Longueur du tableau choisie par le robot
        console.log(stockGuess)

        tabs = Array(stockGuess.length).fill("") // ['','','','','','']

        // Il va boucler la longueur du tableau vide jusqu'à la bonne réponse.
        for(let i = 0; i < tabs.length; i = i + 1){
        let enunciateGuess = prompt("Taper les lettres pour deviner le mot du pendu !")
        // Le searchGuess va se chargé de lire la valeur si elle est existante dans le tableau en cours.
        if(searchGuess(stockGuess, enunciateGuess) !== -1){
        for(let j = 0; j < stockGuess.length; j = j + 1){
        // enunciateGuess == stockGuess[j] ces deux tableaux vont comparés 
        // si les valeurs string correspondent [ t | o ] pas trouvés
        // [ o | o ] trouvés.
            if(enunciateGuess == stockGuess[j]){
        // Si la veleur à été trouvés ajoute et remplace et le remplace dans le tableau 
                tabs.splice(j, 1, enunciateGuess)
            }
                console.log("Lettres trouvés : " + stockGuess[j])
            } 
            console.log(tabs)
        } else {
            console.log("Lettres pas trouvés : " + undefined)
        }
        }
        console.log(tabs)
        console.log(stockGuess)
    }

 guess()