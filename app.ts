class Ejercicios3{
    public ejercicio1(){
        let uva1 :number = 1;
        let uva2: number = 2;
        let medida1 : number = 1;
        let medida2 : number = 2;
        let precioUva : number;
        let medidaUva : number;
        let tamanioUva : number;
        medidaUva = parseInt(prompt('Captura que tipo de uva se va a vender\n1. Tipo A (Uva verde)\n2. Tipo B (Uva morada)')?? "");
        tamanioUva = parseInt(prompt('Captura el mañano de la uva que se va a vender\n1. Tamaño 1 (Uva pequeña)\n2. Tamaño 2 (Uva grande)') ?? "");
        precioUva = Number(prompt('Captura el costo del Kg de la uva'));
        // Uva verde
        if (medidaUva == uva1) {
            // Uva verde pequeña
            if (tamanioUva == medida1) {
                precioUva = precioUva + 0.20;
                alert('El total de la venta es de ' + precioUva);
            }
            // Uva verde grande
            if (tamanioUva == medida2) {
                precioUva = precioUva + 0.30;
                alert('El total de la venta es de ' + precioUva);
            }
        }
        // Uva morada
        if (medidaUva == uva2) {
            // Uva morada pequeña
            if (tamanioUva == medida1) {
                precioUva = precioUva - 0.30;
                alert('El total de la venta es de ' + precioUva);
            }
            // Uva morada grande
            if (tamanioUva == medida2) {
                precioUva = precioUva - 0.50;
                alert('El total de la venta es de ' + precioUva);
            }
        }
    }
    public Ejercicio2(){
        let estudiantes : number;
        let total : number = 0;
        estudiantes = Number(prompt('Cantidad a estudiante que asistiran'));
        if (estudiantes>=100) {
            total = estudiantes * 65;
        }
        if (estudiantes>=50 && estudiantes<100) {
            total = estudiantes * 70;
        }
        if (estudiantes>=30 && estudiantes<50) {
            total = estudiantes * 95;
        }
        if (estudiantes<30) {
            total = estudiantes * 500;
        }
        alert('todos los estudiantes deben pagar la suma de ' + total + ' Euros' + '\nla renta del autobus es de 4000 y cada estudiante pagara ' + (4000/estudiantes));

    }
    public ejercicio3(){
        let paquete1 : number =1;
        let paquete2 : number =.80;
        let paquete3 : number =.70;
        let minutosExtra: number =0;
        let cobrollamada : number =0;
        let minutosllamada:number =0;
        let cobroTotal: number =0;
        let dia: string = 'domingo';
        let turno:string = 'tarde';
        minutosllamada = Number(prompt('Total de minutos de llama'));
        if (minutosllamada<=5) {
            cobrollamada=paquete1;
        }
        if (minutosllamada>=6 && minutosllamada<=8) {
            cobrollamada=paquete1+paquete2;
        }
        if (minutosllamada>=9 && minutosllamada<10) {
            cobrollamada=paquete1+paquete2+paquete3;
        }
        if (minutosllamada>10) {
        cobroTotal=(minutosExtra*.50)+(paquete1+paquete2+paquete3);
        }
        if (dia !='domingo') {
            if (turno!='tarde') {
                cobroTotal=cobrollamada+(cobrollamada*0.15);
            } else {
                cobroTotal=cobrollamada+(cobrollamada*0.10);
            }
        } else {
            cobroTotal=cobrollamada+(cobrollamada*0.03);
        }
        console.log('costo total de tu llamada es ' + cobroTotal);
    }
    
}
let objeto = new Ejercicios3();
//objeto.ejercicio1();
//objeto.Ejercicio2();
objeto.ejercicio3();