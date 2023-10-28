let nomeDoJogador = "Marco"
let vitorias = 199
let derrotas = 51
function saldo(num1, num2) {
    return num1 - num2;
  }
  let resultado = saldo(vitorias, derrotas);  
if (resultado <= 10) {
   nivel = "Ferro"
} else if (resultado >= 11 && resultado <= 20) {
    nivel = "Bronze"
} else if (resultado >= 21 && resultado <= 50) {
    nivel = "Prata"
} else if (resultado >= 51 && resultado <= 80) {
    nivel = "Ouro"
} else if (resultado >= 81 && resultado <= 90) {
    nivel = "Diamante"
} else if (resultado >= 91 && resultado <= 100) {
    nivel = "Lendário"
} else if (resultado >= 101 ) {
    nivel = "Imortal"
}    
console.log("O Jogador "+nomeDoJogador+" tem de saldo de "+resultado+" vitótias e está no nível "+nivel);