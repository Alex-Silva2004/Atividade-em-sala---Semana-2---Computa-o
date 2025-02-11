// Definindo as notas do aluno
const notas = [10,4,10];

// Variável para armazenar a soma das notas
let soma = 0;

// Índice inicial para o loop
let i = 0;

// Loop while para iterar sobre as notas
while (i<notas.length) {
    soma += notas[i]; // Adiciona a nota atual à soma 
    i++;
}

// Calculando a médias das notas
const media = soma / notas.length;

// Definindo a média mínima para aprovação
var mediaMinima = 7; 

// Verificando se o aluno foi aprovado ou não
if (media >= mediaMinima) {
    console.log(media.toFixed(2) + " APROVADO");
} else {
    console.log(media.toFixed(2) + " REPROVADO");
}
