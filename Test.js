let contador = {
    numero : 0,
    palabraFuncion : "",
    reset: function(){
        this.numero = 0;
        this.palabraFuncion = 'reset';
    },

    incremento: function(){
        this.numero = ++this.numero;
        this.palabraFuncion = 'incremento';
    },

    decremento: function(){
        this.numero = --this.numero;
        this.palabraFuncion = 'decremento';
    },

    ultimoComando: function(){
        console.log(this.palabraFuncion);
    },

    get valorActual(){
        return this.numero;
    },

    set valorActual(numero){
        this.numero = numero;
        this.palabraFuncion = 'actualizacion';
    }
};

contador.valorActual = 10;
contador.incremento();
contador.incremento();
contador.decremento();
contador.incremento();
console.log(contador.valorActual);
contador.ultimoComando();


let pepita = {
    gramosActuales : 0,
    costoFijo : 10,
    gramosAcumulados : 0,
    energiaFinal : 0,
    estadoAnimo : "",


    energia: function(){
        this.energiaFinal =  ((this.gramosActuales -(this.gramosAcumulados/4))*4);
        return this.energiaFinal;
    },
    comer: function(gramosConsumidos){
        this.gramosActuales = gramosConsumidos;
    },
    valor : function(kilometro){
        let gastoJoules = kilometro + this.costoFijo;
        this.gramosAcumulados = this.gramosAcumulados + gastoJoules;
    },
    estaDebil : function(){
        if(this.energiaFinal<50){
            this.estadoAnimo = 'Debil';
        }
    },
    estaFeliz : function(){
        if(this.energiaFinal>=500 && this.energiaFinal<=100 ){
            this.estadoAnimo = 'Feliz';
        }
    },
    cuantoQuiereVolar: function(){
        let energiaExtra = 0;
        let multiploExacto = 0;
        let totalQuiereVolar = 0;
        let energiaBase = this.energiaFinal /5;

        if(this.energiaFinal >= 300 && this.energiaFinal <=400){
            energiaExtra = 10;
        }
        if(this.energiaFinal % 20 == 0){
            multiploExacto = 15;
        }
        totalQuiereVolar = energiaBase + energiaExtra + multiploExacto;
        return totalQuiereVolar;
    }
};

pepita.comer(100);
pepita.valor(10);
pepita.valor(20);
console.log(pepita.energia());
console.log(pepita.cuantoQuiereVolar());

//

class Cuadrilatero{
    constructor(lado1,lado2){
        this.lado1 = lado1;
        this.lado2 = lado2;
    }
    getPerimetro(){
        let perimetro = 2 * (this.lado1 + this.lado2);
        return perimetro;
    }

    getArea(){
        let area = this.lado1 * this.lado2;
        return area;
    }

    set setLado1(lado1){
        this.lado1 = lado1;
    }
    get getLado1(){
        return this.lado1;
    }
    set setLado2(lado2){
        this.lado2 = lado2;
    }
    get setLado2(){
        return this.lado2;
    }
}

let lado1 = 38;
let lado2 = 21;
let cuadrilero = null;

if(lado1 === lado2){
    cuadrilero = new Cuadrilatero(lado1,lado2);
}else{
    cuadrilero = new Cuadrilatero(lado1,lado2);
}

console.log("El Area del Cuadrilatero es : "+cuadrilero.getArea());
console.log("El Perimetro del Cuadrilatero es : "+cuadrilero.getPerimetro());


//

class Coordenadas{

    constructor(ejeX,ejeY){
        this.ejeX = ejeX;
        this.ejeY = ejeY;
    }

    posicionArriba(){
        this.ejeY = ++this.ejeY;
    }

    posicionAbajo(){
        this.ejeY = --this.ejeY;
    }
    posicionIzquierda(){
        this.ejeX = --this.ejeX;
    }

    posicionDerecha(){
        this.ejeX = ++this.ejeX;
    }

    posicionActual(){
        console.log("Posicion X : "+this.ejeX);
        console.log("\nPosicion Y : "+this.ejeY);
    }

    get getEjeX(){
        return this.ejeX;
    }

    get getEjeY(){
        return this.ejeY;
    }

    set setEjeX(ejeX){
        this.ejeX = ejeX;
    }

    set setEjeY(ejeY){
        this.ejeY = ejeY;
    }
}

let posiciones = new Coordenadas(0,0);

posiciones.posicionAbajo();
posiciones.posicionAbajo();
posiciones.posicionDerecha();
posiciones.posicionDerecha();

posiciones.posicionActual();


///

class Paciente{

    constructor(tipoEnfermedad, costoPorEnfermedad,nombrePaciente,cantidadDias,costoAdicional,edadPaciente){
        this.tipoEnfermedad = tipoEnfermedad;
        this.costoPorEnfermedad = costoPorEnfermedad;
        this.nombrePaciente = nombrePaciente;
        this.cantidadDias = cantidadDias;
        this.costoAdicional = costoAdicional;
        this.edadPaciente = edadPaciente;
    }

    set setTipoEnfermedad(tipoEnfermedad){
        this.tipoEnfermedad = tipoEnfermedad;
    }

    set setCostoPorEnfermedad(costoPorEnfermedad){
        this.costoPorEnfermedad = costoPorEnfermedad;
    }

    set setNombrePaciente(nombrePaciente){
        this.nombrePaciente = nombrePaciente;
    }

    set setCantidadDias(cantidadDias){
        this.cantidadDias = cantidadDias;
    }

    set setCostoAdicional(costoAdicional){
        this.costoAdicional = costoAdicional;
    }

    set setEdadPaciente(edadPaciente){
        this.edadPaciente = edadPaciente;
    }

    get getEdadPaciente(){
        return this.edadPaciente;
    }

    get getTipoEnfermedad(){
        return this.tipoEnfermedad;
    }
    
    get getCostoPorEnfermedad(){
        return this.costoPorEnfermedad;
    }

    get getNombrePaciente(){
        return this.nombrePaciente;
    }
    get getCantidadDias(){
        return this.cantidadDias;
    }
    get getCostoAdicional(){
        return this.costoAdicional;
    }

    calcularCostoTotal(){
        let costoTotalPaciente = this.costoAdicional + this.costoPorEnfermedad;
        return costoTotalPaciente;
    }
}

let i = 0;
let costoAdicional;
let edadPaciente = 21;
let tipoEnfermedad = 1;
let diasEstadia = 4;
let costoEnfermedad = 0;

const nombrePaciente = ["PEPE",'JUAN','JORGE','LUIS'];
var arregloContenedor = [];

do {
    
    costoAdicional = 0;
    switch(tipoEnfermedad){
        case 1:
            costoEnfermedad = 25000;
        break;
        case 2:
            costoEnfermedad = 16000;
        break;
        case 3:
            costoEnfermedad = 20000;
        break;
        case 4:
            costoEnfermedad = 32000;
        break;
    }
    if(edadPaciente >= 14 && edadPaciente <= 22){
        costoAdicional = (costoEnfermedad * 0.10);
    }
    let pacienteIngresado = new Paciente(tipoEnfermedad,costoEnfermedad,nombrePaciente[i],diasEstadia,costoAdicional,edadPaciente);
    console.log(edadPaciente);

    arregloContenedor.push(pacienteIngresado);
    diasEstadia++;
    edadPaciente++;
    tipoEnfermedad++;
    i++;
} while (i<4);

//Calculo e impresion del costo total de cada paciente
for(cadaPaciente in arregloContenedor){
    console.log("\nEl Costo Total del paciente "+arregloContenedor[cadaPaciente].nombrePaciente+" es de "+arregloContenedor[cadaPaciente].calcularCostoTotal()+"$");
}
//Cantidad de pacientes de cada tipo de enfermedad
let primerContador = 0;
let segundoContador = 0;
let tercerContador = 0;
let cuartoContador = 0;

for(cadaPaciente in arregloContenedor){
    console.log(arregloContenedor[cadaPaciente].tipoEnfermedad);
    switch(arregloContenedor[cadaPaciente].tipoEnfermedad){
        case 1:
            primerContador = primerContador + 1; 
        break;
        case 2:
            segundoContador = segundoContador + 1; 
        break;
        case 3:
            tercerContador+=1;
        break;
        case 4:
            cuartoContador+=1;
        break;
    }
}

console.log("Los Pacientes con la Enfermedad 1 son alrededor de "+primerContador);
console.log("Los Pacientes con la Enfermedad 2 son alrededor de "+segundoContador);
console.log("Los Pacientes con la Enfermedad 3 son alrededor de "+tercerContador);
console.log("Los Pacientes con la Enfermedad 4 son alrededor de "+cuartoContador);
//Total recaudado , total pacientes
let totalRecaudado = 0;

arregloContenedor.forEach(cadaPaciente => {
    totalRecaudado = totalRecaudado + cadaPaciente.calcularCostoTotal(); 
});

console.log("El Total Recaudado es de "+totalRecaudado+"$ con un Total de "+arregloContenedor.length+" pacientes");

//Edad promedio de los pacientes y porcentaje de pacientes que se hospitalizaron con un costo adicional
let promedioEdadPaciente = 0.0;
let contadorCostoAdicional = 0;

arregloContenedor.forEach(cadaPaciente =>{
    promedioEdadPaciente = promedioEdadPaciente + cadaPaciente.getEdadPaciente;
    if(cadaPaciente.costoAdicional != 0){
        contadorCostoAdicional += 1;
    }
});

console.log("La Edad Promedio de los Pacientes es : "+promedioEdadPaciente/arregloContenedor.length)
console.log("El Porcentaje de Pacientes que se hospitalizaron con un costo adicional es de "+(100/contadorCostoAdicional)+"%");

//Cual es a mayor y menor cantidad de dias que un paciente estuvo hospitalizado
let menosDiasHospitalizacion = 0;
let masDiasHospitalizacion = 0;

let j = 0,k = 0,l = 0;

for(cadaPaciente in arregloContenedor){
    if(j == 0){
        menosDiasHospitalizacion = arregloContenedor[cadaPaciente].cantidadDias;
        masDiasHospitalizacion = arregloContenedor[cadaPaciente].cantidadDias;
    }else{
        if(arregloContenedor[cadaPaciente].cantidadDias < menosDiasHospitalizacion){
            menosDiasHospitalizacion = arregloContenedor[cadaPaciente].cantidadDias;
            k = j;
        }
        if(arregloContenedor[cadaPaciente].cantidadDias > masDiasHospitalizacion){
            masDiasHospitalizacion = arregloContenedor[cadaPaciente].cantidadDias;
            l = j;
        }
    }
    j++;
}
console.log("El paciente "+arregloContenedor[l].nombrePaciente+" estuvo mas dias hospitalizado con un total de "+masDiasHospitalizacion);
console.log("El paciente "+arregloContenedor[k].nombrePaciente+" estuvo menos dias hospitalizado con un total de "+menosDiasHospitalizacion);




