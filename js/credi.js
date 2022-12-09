// Declaraciones
//--------------
// Array
//------
const dataMotorcycles = [benelli150cc, benelli180cc, benelli251cc,benelli302cc,benelli500cc]
const carMontobiker = JSON.parse(localStorage.getItem('carMontobiker')) || []
const dataMonths = [months12,months24,months36,months48]
let listMonthsbiker = []
console.log(listMonthsbiker);
// Query de Elementos
const crediMotorbike = document.querySelector('#crediMotorbike')
const listMonthsbike =document.querySelector('#listMonths')
// Funciones
//----------
const delecBikers = (e) => {
    const delecBikerSelection = e.target.getAttribute('data-sku')
    const bikerSku = dataMotorcycles.find((motorbiker) => motorbiker.sku == delecBikerSelection)
    carMontobiker.shift()
    localStorage.setItem ('carMontobiker' , JSON.stringify (carMontobiker))
}
const carBikers = () => {
    if (carMontobiker.length > 0){
        carMontobiker.forEach((motorbiker)=>{
            const credibike = document.createElement('a')
            credibike.href = ('../index.html')
            credibike.classList.add('carBikers')
            credibike.setAttribute('data-sku', motorbiker.sku)
            credibike.innerHTML=`
                <div class="imgCarbikers">
                    <img src="${motorbiker.arreglo+motorbiker.img}">
                </div>
                <div class="infCarbikers">
                    <h5>${motorbiker.name}</h5>
                    <p>SKU: ${motorbiker.sku}</p>
                    <h4>Precio Neto: $${motorbiker.preci}</h4>
                </div>
                <div class="iconCarbikers">
                    <svg x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50"> <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path></svg>
                </div>
            `
            crediMotorbike.append(credibike)
        })
        const deleButtons = document.querySelectorAll('.carBikers')
        deleButtons.forEach((slider) => {
            slider.addEventListener('click', delecBikers)
        })
        const seleccMonths = (e) => {
            const bikerSeleccmonts = e.target.getAttribute('data-numb')
            const months = dataMonths.find((mosths) => mosths.numb == bikerSeleccmonts)
            if ( carMontobiker.length < 1){
                listMonthsbiker.push(months)
            }else{
                listMonthsbiker.shift()
                listMonthsbiker.push(months)
            }
        }
        function listMonths () {
            dataMonths.forEach((mosths) => {
                const cardMonths = document.createElement ('a')
                cardMonths.setAttribute('data-numb', mosths.numb)
                cardMonths.classList.add('cardMonths')
                cardMonths.innerHTML=`${mosths.nameM}`
                listMonthsbike.append(cardMonths)
            })
            const monthsButtons = document.querySelectorAll('.cardMonths')
            monthsButtons.forEach((slider) => {
                slider.addEventListener('click', seleccMonths )
            })
        }
        listMonths()
    }else{
        const credibike = document.createElement('div')
        credibike.classList.add('emptyCar')
        credibike.innerHTML=`
            <h2>Debes seleccionar el modelo de <br> Moto que deseas</h2>
            <a href="../index.html" >Volver</a>
        `
        crediMotorbike.append(credibike)
    }
}



/*Rederizado aviso*/
carBikers() 
