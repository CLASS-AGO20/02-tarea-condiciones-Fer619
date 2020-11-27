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