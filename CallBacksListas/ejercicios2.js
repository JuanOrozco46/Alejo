const nombres = ['Ana','Luis', 'Sofia', 'Carlos'];
nombres.forEach(function(nombre, indice){
    var numero = indice +1;
    console.log(numero + '. ' + nombre);
});