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

// set selected race/species
function chooseRace(raceFromForm) {
    characterRace = raceFromForm.value // radio button value is a string
    console.log(`current race:`, characterRace)
}

// apply racial ability modifiers
function raceModifier() {
    if (characterRace === "human") {
        console.log("applying human modifiers")
        console.log(raceModifiers.human)
        renderRaceModifiers(0)
        applyRaceModifiers(0)
        previousRace = "human"
    }

    if (characterRace === "dwarf") {
        console.log("applying dwarf modifiers")
        console.log(raceModifiers.dwarf)
        renderRaceModifiers(1)
        applyRaceModifiers(1)
        previousRace = "dwarf"
    }
}

// find which set of race modifiers to render
function renderRaceModifiers(renderRace) {
    if (renderRace === 0) {
        console.log("render human")
        renderModifiers(raceModifiers.human)
    }

    if (renderRace === 1) {
        console.log("render dwarf")
        renderModifiers(raceModifiers.dwarf)
    }
}

// render penalties/bonuses in Modifiers column
function renderModifiers(modifierSet) {
    let values = modifierSet
    for (let i = 0; i < 6; i++) {
        if (values[i] === 0) {
            values[i] = ""
        }
        if (values[i] > 0) {
            values[i] = `+${values[i]}`
        }
    }

    modStr.textContent = values[0]
    modDex.textContent = values[1]
    modCon.textContent = values[2]
    modInt.textContent = values[3]
    modWis.textContent = values[4]
    modCha.textContent = values[5]
}

function applyRaceModifiers(modifierSet) {
    if (modifierSet === 0) {
        console.log("remove previous race modifiers")
        console.log("current stats", characterStats)
        console.log("base stats", baseCharacterStats)
        characterStats = baseCharacterStats
        console.log("revised stats", characterStats)
        // for (let i = 0; i < 6; i++) {
        //     characterStats[i] -= raceModifiers[previousRace][i]
        // }
        console.log("apply human modifiers")
        for (let i = 0; i < 6; i++) {
            characterStats[i] += raceModifiers[characterRace][i]
        }
    }

    if (modifierSet === 1) {
        console.log("remove previous race modifiers")
        characterStats = baseCharacterStats
        console.log("apply dwarf modifiers")
        for (let i = 0; i < 6; i++) {
            characterStats[i] += raceModifiers[characterRace][i]
        }
    }

    // // console.log(raceModifiers[characterRace][5])
    // console.log(`${previousRace} > ${characterRace}`)
    // for (i = 0; i < 6; i++) {
    //     // remove modifiers from previous race
    //     console.log('prev modifier', Number(raceModifiers[previousRace][i]))
    //     characterStats[i] -= raceModifiers[previousRace][i]
    //     console.log('minus', characterStats[i])
    //     // add modifiers from current race
    //     console.log('curr modifier', Number(raceModifiers[characterRace][i]))
    //     characterStats[i] += Number(raceModifiers[characterRace][i])
    //     console.log('plus', characterStats[i])
    // }

    // renderStats()
}

function rollDice() {
    // get character race, so we can set modifiers later
    // chooseRace()

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
    raceModifier()
}