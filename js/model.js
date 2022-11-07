class Motorcycles{ 
    constructor(brand, model, years, state, setting, preci, sku){
        this.brand = brand;
        this.model = model;
        this.years = years;
        this.state = state;
        this.setting = setting;
        this.preci = preci;
        this.sku= sku;
    }
}
const pulsar125cc = new Motorcycles("Pulsar","125cc","2021","Nueva","Sencilla",8000000,"MT0001");
const pulsar175cc = new Motorcycles("Pulsar","175cc","2022","Nueva","ABS",10000000,"MT0004");
const pulsar200cc = new Motorcycles("Pulsar","200cc","2021","Nueva","Sencilla",12000000,"MT0005");

console.log ( pulsar125cc, pulsar175cc, pulsar200cc )
