
let nome = "Lucas"
let xp = 8000
let classif = ""


if (xp <= 1000) {
    classif = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    classif = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    classif = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    classif = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    classif = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    classif = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    classif = "Imortal";
} else if (xp >= 10001) {
    classif = "Radiante";
}


console.log("O Herói de nome "+ nome+ " está no nível de "+ classif)

