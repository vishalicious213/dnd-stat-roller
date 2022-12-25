let strength = document.getElementById("str")
let dexterity = document.getElementById("dex")
let constitution = document.getElementById("con")
let intelligence = document.getElementById("int")
let wisdom = document.getElementById("wis")
let charisma = document.getElementById("cha")

let characterStats = [0, 0, 0, 0, 0, 0]

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
}

// apply racial ability modifiers
function raceModifier() {
    if (characterRace === "human") {
        console.log("applyling human modifiers")
        previousRace = "human"
    }

    if (characterRace === "dwarf") {
        console.log("applyling dwarf modifiers")
        // console.log(raceModifiers.dwarf)
        applyRaceModifiers()
    }
}

function applyRaceModifiers() {
    // console.log(raceModifiers[characterRace][5])
    for (i = 0; i < 6; i++) {
        characterStats[i] += raceModifiers[characterRace][i]
    }
}

function renderStats() {
    strength.textContent = characterStats[0]
    dexterity.textContent = characterStats[1]
    constitution.textContent = characterStats[2]
    intelligence.textContent = characterStats[3]
    wisdom.textContent = characterStats[4]
    charisma.textContent = characterStats[5]
}

function rollDice() {
    // get character race, so we can set modifiers later
    chooseRace()

    // roll base stats
    characterStats[0] = generateStat()
    // strength.textContent = characterStats[0]
    characterStats[1] = generateStat()
    // dexterity.textContent = characterStats[1]
    characterStats[2] = generateStat()
    // constitution.textContent = characterStats[2]
    characterStats[3] = generateStat()
    // intelligence.textContent = characterStats[3]
    characterStats[4] = generateStat()
    // wisdom.textContent = characterStats[4]
    characterStats[5] = generateStat()
    // charisma.textContent = characterStats[5]

    renderStats()

    // apply racial modifiers
    raceModifier()
}