class Motorcycles{ 
    constructor(name, sku, img, model, cilindraje, power, torque, description, preci){
        this.name= name;
        this.sku= sku;
        this.img = img;
        this.model = model;
        this.cilindraje= cilindraje;
        this.power=power;
        this.torque=torque;
        this.description=description;
        this.preci = preci;
    }
}

const benelli150cc = new Motorcycles('Moto Benelli de 150cc','mt001','../assets/img/product/benelli150.png','2023','150 cc', '13,8 HP @ 9000 rpm', '12 Nm @ 7000 rpm', 'La nueva TNT 150 i ofrece confianza al manejar, ligereza y una potencia responsable para los nuevos motociclistas. Todo comienza con el motor de 150 cc refrigerado por aire y su caja de cambios de 5 velocidades.', '9490000')
const benelli180cc = new Motorcycles('Moto Benelli de 180cc','mt002','../assets/img/product/benelli180.png','2022','180 cc', '18 HP @ 9500 rpm', '14Nm @ 9500rpm', 'Te bastará una mirada a la agresiva postura de la nueva Benelli 180S y una minuciosa inspección a sus componentes para darte cuenta del diseño italiano que lleva en su sangre.', '11990000')
const benelli251cc = new Motorcycles('Moto Benelli de 251cc','mt003', '../assets/img/product/benelli251.png','2023','251cc', '25,8 Hp @ 9250 rpm', '21,1 Nm @ 8000 rpm', 'Te bastará una mirada a la agresiva postura de la nueva Benelli 251s y una minuciosa inspección a sus componentes para darte cuenta del diseño italiano que lleva en su sangre, ofreciendo una notable combinación de capacidades y valor.', '17990000')
const benelli302cc = new Motorcycles('Moto Benelli de 302cc','mt004', '../assets/img/product/benelli302.webp','2023','300cc', '38 HP @ 11000 rpm', '25,6 Nm @ 9750 rpm', 'La nueva Benelli 302S golpea el pavimento ofreciendo una notable combinación de capacidades y valor. Desde su motor bicilíndrico en paralelo, con relación de compresión alta, hasta el armazón de enrejado de acero, funcional y hermoso, que se ajusta a su orgullosa herencia italiana.','25990000')
const benelli500cc = new Motorcycles('Moto Benelli de 500cc','mt005','../assets/img/product/benelli500.webp','2022','500cc', '47,6 HP @ 8500 rpm','46 Nm @ 6000 rpm','El 502C de Benelli causa una primera impresión intensa con sus líneas elegantes y agresivas y su postura larga y baja. Respalda su estilo audaz con una impresionante variedad de tecnología que hacen del 502C un valor increíble. Su ergonomía de cruiser con retroceso y su asiento bajo posicionan perfectamente al piloto para sacar el máximo provecho del motor equipado en su motocicleta, un motor cuatro tiempos de 500 cc, con dos cilindros en paralelo y cuatro válvulas por cilindro, que darán al piloto un control total.','34990000')
const benelli702cc = new Motorcycles('Moto Benelli de 702cc','mt006','../assets/img/product/benelli702.png','2023','702cc', '76,2 Hp @ 8500 rpm','67 Nm @ 6500 rpm','Es una motocicleta concreta, pragmática y cautivadora, capaz de conquistar a todos los motociclistas desde el primer viaje, ya que puede garantizar una diversión absoluta en la carretera','43990000')