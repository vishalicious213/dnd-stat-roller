let strength = document.getElementById("str")
let dexterity = document.getElementById("dex")
let constitution = document.getElementById("con")
let intelligence = document.getElementById("int")
let wisdom = document.getElementById("wis")
let charisma = document.getElementById("cha")

function generateStat() {
    let stat = Math.floor(Math.random() * 18 + 1)
    if (stat < 4) {
        stat = 3
    }
    return stat
}

function rollDice() {
    strength.textContent = generateStat()
    dexterity.textContent = generateStat()
    constitution.textContent = generateStat()
    intelligence.textContent = generateStat()
    wisdom.textContent = generateStat()
    charisma.textContent = generateStat()
}