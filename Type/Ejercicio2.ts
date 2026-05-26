type Transaccion = {
    monto : number,
    tipo: "ingreso" | "egreso"
    categoria: string;
}


function sumaPorTipo(transacciones: Transaccion[]) {
  return transacciones.reduce(
    (acc, cur) => {
      if (cur.tipo === "ingreso") {
        acc.ingreso += cur.monto;
      } else {
        acc.egreso += cur.monto;
      }

      return acc;
    },
    { ingreso: 0, egreso: 0 },
  );
}