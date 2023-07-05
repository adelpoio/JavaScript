//-------------------- Inicio dos Types Numbers --------------------//
// Tipo Number (Inteiro):

//Constantes de Numeros para as operações
const meuNumero = 22;
const primeiroNumero = 1;
const segundoNumero = 3;
const operacaoMatematica = primeiroNumero * segundoNumero; // É possivel alterar a operação de acordo com: (+); (-); (/); (*);

console.log(operacaoMatematica);

// Tipo Number (Decimal / Floating Point / Ponto Flutuante):

//Constantes de Numeros para as operações
const numeroPontoFlutuante = 3.3;
const numeroPontoFlutuanteSemZero = .5;

const operacaoMatematicaFloat = numeroPontoFlutuante * numeroPontoFlutuanteSemZero;

console.log(operacaoMatematicaFloat)

// NaN -> Not a Number (Não é um número)
const alura = "Alura";
console.log(alura * primeiroNumero);
//-------------------- Fim dos Types Numbers --------------------//


//-------------------- Inicio dos Types Strings --------------------//
// Tipo Strings (Textos):

const texto1 = "Olá, mundo!";
const texto2 = "Bem vindo ao Type Strings";
const senha = "senhaSuperSegura456";
const stringDeNumeros1 = "12";
const stringDeNumeros2 = "34567";
const citacao = 'Meu nome é ';
const meuNome = "André";


// Concatenação de texto (Sinal de "+"):

console.log(citacao + meuNome);

// Template String OU Template Literal:

//-------------------- Fim dos Types Strings --------------------//


//-------------------- Inicio dos Types Boolean --------------------//
//True -> Verdadeiro
//False -> Falso
console.log(primeiroNumero === segundoNumero);
console.log (texto1 === texto2);

//-------------------- Fim dos Types Boolean --------------------//