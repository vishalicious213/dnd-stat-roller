let strength = document.getElementById("str")
let dexterity = document.getElementById("dex")
let constitution = document.getElementById("con")
let intelligence = document.getElementById("int")
let wisdom = document.getElementById("wis")
let charisma = document.getElementById("cha")
let race = "human"

// rolls 3d6 as a baseline stat generator
function generateStat() {
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    let die3 = Math.floor(Math.random() * 6 + 1)
    let stat = die1 + die2 + die3
    return stat
}

// applies racial attribute modifiers
function chooseRace() {
    let races = document.getElementsByName("race")

    for (i = 0; i < races.length; i++) {
        if (races[i].checked) {
            console.log(races[i].value)
        }
    }
}

function rollDice() {
    chooseRace()
    strength.textContent = generateStat()
    dexterity.textContent = generateStat()
    constitution.textContent = generateStat()
    intelligence.textContent = generateStat()
    wisdom.textContent = generateStat()
    charisma.textContent = generateStat()
}