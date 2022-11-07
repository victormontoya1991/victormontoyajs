function calculateCredit (feeCredit){
    const tax = 19;
    const segurity = 25000;
    let numberFee = "";
    let interests = "";
    switch (feeCredit) {
        case '12':
            numberFee = 12;
            interests = 12;
            break;
        case '24':
            numberFee = 24;
            interests = 14;
            break;
        case '36':
            numberFee = 36;
            interests = 15;
            break;
        case '48':
            numberFee = 48;
            ImpCuotas = 16;
            break;
        default:
            console.log ('Numero de cuotas incorrecto');
            break;
    }
    instalPayment = Payment / numberFee ;
    pagos = instalPayment + ((instalPayment  * interests) / 100);
    console.log ("Precio de cuota: $"+ pagos);
    totalMensual = pagos + segurity ;
    console.log ("Costo de Seguro $"+ segurity);
    return totalMensual;
}
let selenumberFee = prompt ("Selecciona la cantidad de cuotas : 12, 24, 36, 48").toLowerCase();

console.log ("Cuota Mensual: $"+ calculateCredit( seleModel , selenumberFee));