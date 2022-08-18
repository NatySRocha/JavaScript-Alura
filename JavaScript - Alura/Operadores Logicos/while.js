console.log("Destinos possiveis:");
const listaDeDestinos = new Array(`Salvador`, "São Paulo", "Rio de Janeiro");
console.log(listaDeDestinos);

const idadeComprador = 22;
const estaAcompanhada = true;
const temPassagemComprada = true;
if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa viagem");
} else {
  console.log("Nao pode comprar");
}

listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);

console.log("Ëmbarque:\n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
  console.log("Boa viagem");
} else {
  console.log("Vc nao pode embarcar");
}

