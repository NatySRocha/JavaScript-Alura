//Trabalhando com condicionais

console.log("Destinos possiveis:");
const listaDeDestinos = new Array(`Salvador`, "São Paulo", "Rio de Janeiro");
console.log(listaDeDestinos);

const idadeComprador = 15;
const estaAcompanhada = true;
if (idadeComprador >= 18) {
  console.log("Pode comprar");
} else if (estaAcompanhada) {
  console.log("Comprador pode comprar");
} else {
  console.log("Nao pode comprar");
}

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);

// console.log(idadeComprador < 18);
// console.log(idadeComprador > 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
