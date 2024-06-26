var triangulolado1 = 7
var triangulolado2 = 8
var triangulolado3 = 5
 
if (triangulolado1 === triangulolado2 && triangulolado1 === triangulolado3 && triangulolado2 === triangulolado3)
    {console.log ('Triângulo Equilátero')}
else if (triangulolado1 === triangulolado2 || triangulolado1 === triangulolado3 || triangulolado2 === triangulolado3)
    {console.log ('Triângulo Isósceles')}
else {console.log ('Triângulo Escaleno')}