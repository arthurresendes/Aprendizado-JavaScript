const lista = ["A", "B", "C"];

const limpeza = (letra) => {
  const filtrada = lista.filter((item) => item != letra);
  return filtrada;
};

const mapiando = (letra) => {
  const mapear = lista.map((item) => {
    if (item === "B") {
      return letra; //item = letra
    }
    return item;
  });
  return mapear;
};

console.log(limpeza("A"));
console.log(mapiando("A"));
