

const boleta = {
  precio: 400,
  descuento: 10,
  descuentoNeto: function() {
    return this.precio - (this.descuento * this.precio / 100);
  }
}

console.log(`El total a pagar es ${boleta.descuentoNeto}`);

console.log(boleta.descuentoNeto())


