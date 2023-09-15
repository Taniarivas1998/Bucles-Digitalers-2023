/*let alumno;
let alumnosDelCurso=[];
//Cuando la persona ingrese como nombre de alumno "exit"

do{
    alumno= prompt("Ingrese el nombre del alumno")
    if(alumno!=="exit")alumnosDelCurso.push(alumno)
}

while(alumno!=="exit")*/

/*let contador=1
while(contador<==100){
    //contador++
}*/

/*for(inicializar; condicion; valorAmodificar){
}*/

/*for(let i=1;  i<=100; i++){

    console.log ('Iteracion numero ${i}')
}*/

const alumnosCurso=["Pedro", "Maria","Miguel","Ana","Oli","Matias","Daniela","Lili","Fernando"]


//*FOR convencional
/*for (let i=0; i<alumnosCurso.length; i++){

    console.log(alumnosCurso[i])
}
*/


// *FOR OF
for(let alumno of alumnosCurso){

console.log(alumno)

}

alumnosCurso.push("John")
