export default class  App {
    
    sumar (numero1, numero2){
        let resultado = numero1 + numero2;

        return resultado;    
    }
//aunque hay variables con el mismo nombre solo contaran para su propia llave 
    convertirADolar(pesos) {
        const DOLAR = 22.4;
    
        let resultado = pesos / DOLAR;

        return resultado; 
        //toFixed(2) es para limitar el numero de desimales 
    }

    calcularPerimetroCirculo(radio) {
        const PI = 3.1416;

        let perimetro = 2 * PI * radio;

        return perimetro;
    }

}

let app = new App();

//Pueba del metodo sumar()
console.log(app.sumar(5, 7));

let r = app.sumar(10, 20);
console.log(r);

//Preba del metodo convertir a dolar
console.log(app.convertirADolar(1000));

r = app.convertirADolar(580);
console.log(r);

//Prueba del metodo calcularPerimetroCirculo()
console.log(app.calcularPerimetroCirculo(7));

r = app.calcularPerimetroCirculo(9);
console.log(r);