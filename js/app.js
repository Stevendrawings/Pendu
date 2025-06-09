
function searchGuess(arr, val){
    return arr.indexOf(val)
}

function guess(partyGuess){

    let tab = [];
    partyGuess = Number(prompt("Combien de tour voulez vous faire ?"))
    for(let i = 0; i < partyGuess; i = i + 1){

        let countGuess = String(prompt("Ajouter " + partyGuess + " mots du pendu !"))
        tab.push(countGuess) }

    let robots = Math.floor(Math.random() * partyGuess)
    let tabs = []
    let tablo = []
    let stockGuess = Array.from(tab[robots]);

    for(let j = 0; j < stockGuess.length; j = j + 1){
        enunciateGuess = prompt("Taper les lettres pour deviner le mot du pendu !")
        tabs.push("") // ['', '', '', '']
        if (searchGuess(stockGuess, enunciateGuess) !== -1) {
            tabs.splice(j, 1, enunciateGuess)
        } else if(searchGuess(stockGuess, enunciateGuess) > -1){
            console.log(stockGuess + " existe déjà dans le tableau.");
        }
            let index = tabs.filter((word) => word === stockGuess[j]);
            tablo.push(index)
    } 
    console.log(tablo)

        let reponseGuess = Array.from(stockGuess); 
        console.log(reponseGuess); // ['m', 'o', 'm', 'o'] 
}

 guess()