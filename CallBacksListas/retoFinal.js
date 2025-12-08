const estudiante =[
    {nombre:'Ana', nota: 4.5},
    {nombre:'Luis', nota:3.2},
    {nombre:'Carlos', nota: 2.8},
    {nombre:'Sofia',nota: 4.8},
    {nombre: 'Maria',nota: 3.9}
];
const nombres = estudiante.map(function(nombreIndividual){
    return nombreIndividual.nombre;
});
console.log(nombres);
const aprobado = estudiante.filter(function(alumno){
    return alumno.nota >=3.5;
});
console.log(aprobado);

const resultado1 = estudiante.find(function(primerEstudiante){
    return primerEstudiante.nota >= 4.5;
});
console.log(resultado1);