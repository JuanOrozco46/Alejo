const productos = [
    {id: 1, nombre: 'mouse', precio: 50000},
    {id: 2, nombre: 'teclado', precio: 150000},
    {id: 3, nombre: 'monitor', precio: 900000}
];
const resultado1 = productos.find(function(producto){
    return producto.nombre === 'teclado';
});
console.log (resultado1);
const resultado2 = productos.find(function(producto){
    return producto.precio > 100000;
});
console.log(resultado2);