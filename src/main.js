export default class App {

    esPar(numero){
    let result;
        if(numero === 0){
            return false;
        } else if(numero % 2 === 0){
            return true;
        } else{
            return false;
        }
        return result;
    }
    esMultiplo(numero1, numero2){
        let result;

        if(numero1 % numero2 === 0){
            return true;
        }else {
            return false;
        }
        return result;
    }
    calcularSalario(tipoTrabajador, horasTrabajadas){
        let result;

        switch(tipoTrabajador){
            case "1":
                result = 20 * horasTrabajadas;
                break;
            case "2":
                result = 22 * horasTrabajadas;
                break;
            case "3":
                result = 25 * horasTrabajadas;
                break;
            default:
                result = -1
        }
        return result;
    }
    obtenerCalificación(calificaciónNumerica){
        let result;
        
        if(calificaciónNumerica === 10){
            return "A+";
        } else if(calificaciónNumerica === 8 && calificaciónNumerica <= 9){
            return "A";
        } else if(calificaciónNumerica === 6 && calificaciónNumerica <=7){
            return "B";
        } else if(calificaciónNumerica <=5){
            return "C";
        } else{
            return "ERROR";
        }
        return result;
    }

    obtenerCercano100(numero1, numero2, numero3){
        let x = Math.abs(numero1 - 100)
        let y = Math.abs(numero2 - 100)
        let z = Math.abs(numero3 - 100)

        if(x < y && x < z){
            return numero1;
        }
        
        if(y < x && y < z){
            return numero2;
        }

        if(z < x && z < y){
            return numero3;
        } else{
            return null;
        }
        
     }

     costoBoletos(boletos, zona){
         let costoTotal;

         switch(zona){
             case 1:
                 costoTotal = boletos * 300;
                 break;
             case 2:
                 costoTotal = boletos * 450;
                 break;
             case 3:
                 costoTotal = boletos * 700;
                 break;
             default:
                 costoTotal = -1;
         }

         if(costoTotal > 2000){
             costoTotal= costoTotal * 0.93;
         }

        return costoTotal;
     }

     estaEnRango(limiteInicial, limiteFinal, numero){

        let respuesta;

        if(numero > limiteInicial && numero < limiteFinal){
            respuesta = true;
        } else if(numero > limiteInicial && numero > limiteFinal){
            respuesta = false;
        } else{
            respuesta = false;
        }
        return respuesta;
     }

     
}

let app = new App();

console. log(app.esPar(0));
console. log(app.esPar(3));
console. log(app.esPar(6));

console. log(app.esMultiplo(10,2));
console. log(app.esMultiplo(10,6));

console. log(app.calcularSalario("1"));
console. log(app.calcularSalario("2"));
console. log(app.calcularSalario("3"));
console. log(app.calcularSalario("4"));

console. log(app.obtenerCalificación(10));
console. log(app.obtenerCalificación(5));
console. log(app.obtenerCalificación(6));
console. log(app.obtenerCalificación(8));
console. log(app.obtenerCalificación(11));

console. log(app.obtenerCercano100(90, 70, 103));

console. log(app.costoBoletos(50, 4));
console. log(app.costoBoletos(6, 1));
console. log(app.costoBoletos(5, 2));
console. log(app.costoBoletos(3, 3));

console. log(app.estaEnRango(10, 20, 15));
console. log(app.estaEnRango(10, 20, 30));
console. log(app.estaEnRango(10, 20, 8));
console. log(app.estaEnRango(10, 20, 10));

