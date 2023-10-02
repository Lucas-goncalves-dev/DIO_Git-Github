
let vitorias = 100
let derrotas = 15
let classif = ""

calcResult(vitorias,derrotas)

if (resultado <= 10) {
    classif = "Ferro";
} else if (resultado >= 11 && resultado <= 20) {
    classif = "Bronze";
} else if (resultado >= 21 && resultado <= 50) {
    classif = "Prata";
} else if (resultado >= 51 && resultado <= 80) {
    classif = "Ouro";
} else if (resultado >= 81 && resultado <= 90) {
    classif = "Diamante";
} else if (resultado >= 91 && resultado <= 100) {
    classif = "Lendário";
} else if (resultado >= 101) {
    classif = "Imortal";
} 

console.log("O Herói tem de saldo de "+resultado+" está no nível de "+classif)

function calcResult(vitorias,derrotas){
    resultado = vitorias-derrotas
    return resultado 
}


