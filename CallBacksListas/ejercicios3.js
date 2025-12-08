const precios =[100,200,300];
const preciosConIva = precios.map(function(precio){
    return precio * 1.19;
});
console.log(preciosConIva);