// Trabalhando com listas
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

//console.log(`São Paulo`);

console.log("Destinos possiveis:");
const listaDeDestinos = new Array(`Salvador`, "São Paulo", "Rio de Janeiro");
listaDeDestinos.push("Campos do Jordão");

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[2], listaDeDestinos[1]);
