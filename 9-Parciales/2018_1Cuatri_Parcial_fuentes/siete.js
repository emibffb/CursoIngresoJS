function mostrar() {
    var nota;
    var sexo;
    var promedioNotas;
    var NotaBaja;
    var SexoyNota;
    var notaVaron;
    var contador = 0

    while (contador < 5) {
        nota = parseInt(prompt("Ingrese una nota"));
        while(nota <0 || nota > 10){
            nota = prompt ("Error ingrese una nota entre 0 y 10");
        }
            sexo = prompt("Ingrese un sexo")
       while(sexo !='f' || sexo !='m'){
           sexo = prompt("Error ingrese un sexo válido");
       }

        
    }


}
