// Revisão JavaScript
// ************/Tudo é objeto

// const menu = {
//   seletor: '.principal',
// };

// console.log(menu.seletor.toUpperCase());

// //************/ arrow funcion

// function upperName(name) {
//   return name.toUpperCase();
// }

// const upperName = (name) => {
//   return name.toUpperCase();
// };

// const upperName = (name) => name.toUpperCase();

// console.log(upperName('djane'));

//************/ desestruturação

// function handleMouse(event) {
//   console.log(event);
// }

// document.addEventListener('click', handleMouse);
///--------------------------
// function handleMouse(event) {
//   const x = event.clientX;
//   const y = event.clientY;
//   console.log(x, y);
// }

// document.addEventListener('click', handleMouse);

// desestruturando o objeto
// function handleMouse(event) {
//   const { clientX, clientY } = event;

//   console.log(clientX, clientY);
// }

// document.addEventListener('click', handleMouse);

////////////////////////////
// function handleMouse({ clientX, clientY }) {
//   console.log(clientX, clientY);
// }

// document.addEventListener('click', handleMouse);

//// desestruturando Arrays

// const frutas = ['banana', 'uva'];
// const [fruta1, fruta2] = frutas;

// console.log(fruta1, fruta2);
// //// segundo exemplo
// const useQuadrado = [
//   4,
//   function (lado) {
//     return 4 * lado;
//   },
// ];

// desestruturando

// const [lado, perimetro] = useQuadrado;

// console.log(lado);
// console.log(perimetro(10));

//**************REST */ criando uma função que mostra o nome de uma empresa com uma lista de clientes dela

// function showList(empresa, clientes) {
//   clientes.forEach((cliente) => {
//     console.log(cliente, empresa);
//   });
// }

// showList('Google', ['João', 'Maria']);

//----------- com rest (...)
function showList(empresa, ...clientes) {
  clientes.forEach((cliente) => {
    console.log(cliente, empresa);
  });
}

showList('Google', 'João', 'Maria', 'Joana', 'Marcos');

//----------- com spread (...)

const numeros = [10, 20, 5, 8, 15];
// const maior = Math.max(10, 20, 5, 8, 15);
const maior = Math.max(numeros);
// console.log(maior);
console.log(maior); //NaN

const numeros1 = [10, 20, 5, 8, 15];
// const maior = Math.max(10, 20, 5, 8, 15);
const maior1 = Math.max(...numeros);
// console.log(maior);
console.log(maior1); //20

//***********Somando itens de um array com outra array */

const numeros2 = [...numeros];
console.log(9, 13, numeros2, 24, 32, 48);

const carro = {
  cor: 'azul',
  porta: 4,
};

carro.ano = 2024;

console.log(carro);

const carro2 = {
  cor: 'azul',
  porta: 4,
};

carroAno = { ...carro, ano: 2024 };

console.log(carroAno);
