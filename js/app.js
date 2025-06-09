
function searchGuess(arr, val){ return arr.indexOf(val) }

function guess(partyGuess){

    let tab = [];
    partyGuess = Number(prompt("Combien de tour voulez vous faire ?"))
    for(let i = 0; i < partyGuess; i = i + 1){
    let countGuess = String(prompt("Ajouter " + partyGuess + " mots du pendu !"))
    tab.push(countGuess) }

    let tabs = [], robots = Math.floor(Math.random() * partyGuess),
        stockGuess = Array.from(tab[robots]); stockGuess;
        console.log(stockGuess)

        tabs = Array(stockGuess.length).fill("")

        for(let i = 0; i < tabs.length; i = i + 1){
        let enunciateGuess = prompt("Taper les lettres pour deviner le mot du pendu !")
        if(searchGuess(stockGuess, enunciateGuess) !== -1){
        for(let j = 0; j < stockGuess.length; j = j + 1){ 
            if(enunciateGuess == stockGuess[j]){
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