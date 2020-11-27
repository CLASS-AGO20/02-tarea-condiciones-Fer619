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
}

let app = new App();

console. log(app.esPar(0));
console. log(app.esPar(3));
console. log(app.esPar(6));

console. log(app.esMultiplo(10,2));
console. log(app.esMultiplo(10,6));