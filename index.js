let strength = document.getElementById("str")
let dexterity = document.getElementById("dex")
let constitution = document.getElementById("con")
let intelligence = document.getElementById("int")
let wisdom = document.getElementById("wis")
let charisma = document.getElementById("cha")

let characterRace = "human"
let previousRace = "human"
const raceModifiers = {
    human: [0, 0, 0, 0, 0, 0],
    dwarf: [0, 0, 1, 0, 0, -1],
    elf: [0, 1, -1, 0, 0, 0],
    gnome: [0, 0, 0, 1, -1, 0],
    helf: [0, 0, 0, 0, 0, 0],
    halfling: [-1, 1, 0, 0, 0, 0],
}

// rolls 3d6 as a baseline stat generator
function generateStat() {
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    let die3 = Math.floor(Math.random() * 6 + 1)
    let stat = die1 + die2 + die3
    return stat
}

// find selected race/species
function chooseRace() {
    let races = document.getElementsByName("race")
    // loop through race radio buttons and get selected one, set characterRace to that value
    for (i = 0; i < races.length; i++) {
        if (races[i].checked) {
            characterRace = races[i].value
        }
    }

    raceModifier()
}

// apply racial ability modifiers
function raceModifier() {
    if (characterRace === "human") {
        console.log("applyling human modifiers")
    }

    if (characterRace === "dwarf") {
        console.log("applyling dwarf modifiers")
        console.log(raceModifiers.dwarf)
    }

}

function rollDice() {
    chooseRace()
    // console.log('char race:', characterRace)
    strength.textContent = generateStat()
    dexterity.textContent = generateStat()
    constitution.textContent = generateStat()
    intelligence.textContent = generateStat()
    wisdom.textContent = generateStat()
    charisma.textContent = generateStat()

    // apply racial modifiers
    
}