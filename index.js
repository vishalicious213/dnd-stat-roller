// html attribute score elements
let strength = document.getElementById("str")
let dexterity = document.getElementById("dex")
let constitution = document.getElementById("con")
let intelligence = document.getElementById("int")
let wisdom = document.getElementById("wis")
let charisma = document.getElementById("cha")

// html BASE attribute score elements
let baseStrength = document.getElementById("str-base")
let baseDexterity = document.getElementById("dex-base")
let baseConstitution = document.getElementById("con-base")
let baseIntelligence = document.getElementById("int-base")
let baseWisdom = document.getElementById("wis-base")
let baseCharisma = document.getElementById("cha-base")

// html attribute modifier elements
let modStr = document.getElementById("mod-str")
let modDex = document.getElementById("mod-dex")
let modCon = document.getElementById("mod-con")
let modInt = document.getElementById("mod-int")
let modWis = document.getElementById("mod-wis")
let modCha = document.getElementById("mod-cha")

let characterStats = [0, 0, 0, 0, 0, 0]
let baseCharacterStats = [0, 0, 0, 0, 0, 0]

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

// render BASE stats onscreen
function renderBaseStats() {
    baseStrength.textContent = characterStats[0]
    baseDexterity.textContent = characterStats[1]
    baseConstitution.textContent = characterStats[2]
    baseIntelligence.textContent = characterStats[3]
    baseWisdom.textContent = characterStats[4]
    baseCharisma.textContent = characterStats[5]
}

// render stats onscreen
function renderStats() {
    strength.textContent = characterStats[0]
    dexterity.textContent = characterStats[1]
    constitution.textContent = characterStats[2]
    intelligence.textContent = characterStats[3]
    wisdom.textContent = characterStats[4]
    charisma.textContent = characterStats[5]
}

// set selected race/species (onclick)
function chooseRace(raceFromForm) {
    characterRace = raceFromForm.value // radio button value is a string
    renderRaceModifiers(characterRace)
}

// format racial modifiers for display on screen
function clean(valueToFormat) {
    if (valueToFormat === 0) {
        return ""
    }
    if (valueToFormat > 0) {
        return `+${valueToFormat}`
    }
    return valueToFormat
}

// render racial modifiers on screen
function renderRaceModifiers(renderRace) {
    modStr.textContent = clean(raceModifiers[renderRace][0])
    modDex.textContent = clean(raceModifiers[renderRace][1])
    modCon.textContent = clean(raceModifiers[renderRace][2])
    modInt.textContent = clean(raceModifiers[renderRace][3])
    modWis.textContent = clean(raceModifiers[renderRace][4])
    modCha.textContent = clean(raceModifiers[renderRace][5])
    applyRaceModifiers(renderRace)
}

function resetToBaseStats() {
    for (let i = 0; i < 6; i++) {
        characterStats[i] = baseCharacterStats[i]
    }
}

function applyRaceModifiers(renderRace) {
    // remove previous race modifiers
    resetToBaseStats()
    // apply current race modifiers
    for (let i = 0; i < 6; i++) {
        characterStats[i] += raceModifiers[renderRace][i]
    }

    renderStats()
}

function rollDice() {
    // roll starting stats
    characterStats[0] = generateStat()
    characterStats[1] = generateStat()
    characterStats[2] = generateStat()
    characterStats[3] = generateStat()
    characterStats[4] = generateStat()
    characterStats[5] = generateStat()

    // set BASE stats to starting stats
    baseCharacterStats[0] = characterStats[0]
    baseCharacterStats[1] = characterStats[1]
    baseCharacterStats[2] = characterStats[2]
    baseCharacterStats[3] = characterStats[3]
    baseCharacterStats[4] = characterStats[4]
    baseCharacterStats[5] = characterStats[5]

    // display stats onscreen
    renderBaseStats()
    renderStats()

    // apply racial modifiers
    renderRaceModifiers(characterRace)
}