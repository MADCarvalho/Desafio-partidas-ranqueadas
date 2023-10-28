let nomeDoJogador = "Marco"
let vitorias = 100
let derrotas = 51
function saldo(num1, num2) {
    return num1 - num2;
  }
let resultado = saldo(vitorias, derrotas);   
function determinaONivel(resultado){
    if (resultado <= 10) {
        return "Ferro";
    }
    if (resultado >= 11 && resultado <= 20) {
        return 'Bronze';
    }
    if (resultado >= 21 && resultado <= 50) {
        return "Prata";
    }
    if (resultado >= 51 && resultado <= 80) {
        return "Ouro";
    }
    if (resultado >= 81 && resultado <= 90) {
        return "Diamante";
    }
    if (resultado >= 91 && resultado <= 100) {
        return "Lendário";
    }
    if (resultado >= 101 ) {
        return "Imortal";
    }
} let nivel = determinaONivel(resultado)

console.log ("O Jogador "+nomeDoJogador+" tem de saldo de "+resultado+" vitótias e está no nível "+nivel)