function calculateCredit (preciModel , feeCredit){
    const tax = 19;
    const segurity = 25000;
    let numberFee = "";
    let preci = "";
    let interests = "";
    switch (preciModel) {
        case '125':
        case '125cc':
            preci = 8000000;
            break;
        case '175':
        case '175cc':
            preci = 10000000;
            break;
        case '200':
        case '200cc':
            preci = 12000000;
            break;
        default:
            console.log ('No haz seleccionado un modelo corecto');
            break;
    }
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
    Payment = preci + ((preci * tax) / 100);
    console.log ("Precio con IVA: $"+ Payment);
    instalPayment = Payment / numberFee ;
    amount = instalPayment + ((instalPayment  * interests) / 100);
    console.log ("Precio de cuota: $"+ amount);
    totalMonthly = amount + segurity ;
    console.log ("Costo de Seguro $"+ segurity);
    return totalMonthly;
}
let seleModel = prompt ("Por favor ingresa el modelo Honda que deseas : 125cc, 175cc, 200cc").toLowerCase();
let selenumberFee = prompt ("Selecciona la cantidad de cuotas : 12, 24, 36, 48").toLowerCase();

console.log ("Cuota Mensual: $"+ calculateCredit( seleModel , selenumberFee));