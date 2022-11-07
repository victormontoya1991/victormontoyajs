const motorcycles=[
    {
        brand:'Pulsar',
        model:'160cc',
        years:'2021',
        state:'New',
        preci:'1000',
    },
    {
        brand:'Pulsar',
        model:'200cc',
        years:'2021',
        state:'New',
        preci:'1500',
    },
]
let seleModel = prompt ("Por favor ingresa el modelo Honda que deseas : 125cc, 175cc, 200cc");
const cilindraje = seleModel
console.log(cilindraje);
const precio = motorcycles.find((motorcycle) => motorcycle.model === '200cc')
console.log(precio);