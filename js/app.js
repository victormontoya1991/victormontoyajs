// Declaraciones
//--------------

// Array
//------
const dataMotorcycles = [benelli150cc, benelli180cc, benelli251cc,benelli302cc,benelli500cc]

// Array Cart
//------------
let budgetMotorcycles = []


// Query de Elementos
//-------------------
const bikersList = document.querySelector('#cardMotorbike')
const nameMotorbike = document.querySelector('.nameMotorbike')
const descriptionMotorbike = document.querySelector('.descriptionMotorbike')
const cilindrajeMotorbike = document.querySelector('.cilindrajeMotorbike')
const powerMotorbike = document.querySelector('.powerMotorbike')
const torqueMotorbike = document.querySelector('.torqueMotorbike')
const priceMotorbike = document.querySelector('.priceMotorbike')
const infoMotorbike = document.querySelector('.infoMotorbike')
const imgMotorbike = document.querySelector('.imgMotorbike')

// Funciones
//----------
const selecctBikers = (e) => {
    const skuSelecctBikers = e.target.closest('.cardButton').getAttribute('data-sku')
    const selecctBikers = dataMotorcycles.find((motorbiker) => motorbiker.sku == skuSelecctBikers)
    nameMotorbike.textContent = selecctBikers.name
    descriptionMotorbike.textContent = selecctBikers.description
    cilindrajeMotorbike.textContent = `Cilindraje: ${selecctBikers.cilindraje}`
    powerMotorbike.textContent = `Potencia: ${selecctBikers.power}`
    torqueMotorbike.textContent = `Torque: ${selecctBikers.torque}`
    priceMotorbike.textContent = `$${selecctBikers.preci}`
    imgMotorbike.style.backgroundImage = `url(${selecctBikers.img})`
    infoMotorbike.setAttribute('data-sku',selecctBikers.sku)
}

/*Rederizado de Motos en lista*/
function listMotorbiker() {
    dataMotorcycles.forEach((motorbiker) => {
        const cardButton = document.createElement('a')
        cardButton.classList.add('cardButton')
        cardButton.setAttribute('data-sku', motorbiker.sku)
        cardButton.innerHTML = `
            <img class="cardImg" src="${motorbiker.img}" alt="">
            <div class="cardInf">
                <h5>${motorbiker.name}</h5>
                <h4>$${motorbiker.preci}</h4>
            </div>
            <div>
                <svg class="cardIcon" xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="50" height="50" fill="#373736"><path d="M8.127,24l9.507-9.52a3.507,3.507,0,0,0,0-4.948L8.116,0,6,2.121l9.518,9.531a.5.5,0,0,1,0,.707L6.01,21.879Z"/></svg>
            </div>
        `
        bikersList.append(cardButton)
    })
    const cardButtons = document.querySelectorAll('.cardButton')
    cardButtons.forEach((a) => {
        a.addEventListener('click', selecctBikers)
    })
}



// no esta renderizado********************************************************************
const generateBudget = (e) => {
    const skuMotorBikerSelection = e.target.getAttribute('data-sku')
    const bikerSelection = dataMotorcycles.find((motorbiker) => motorbiker.sku == skuMotorBikerSelection)
    bikersBudget.push(bikerSelection)
    cardMotorBikers()
}


// EventListeners
//---------------

infoMotorbike.addEventListener('click', generateBudget)


// Ejecuciones
//------------

listMotorbiker()