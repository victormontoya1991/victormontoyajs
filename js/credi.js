// Declaraciones
//--------------
// Array
//------
const dataMotorcycles = [benelli150cc, benelli180cc, benelli251cc,benelli302cc,benelli500cc]
const carMontobiker = JSON.parse(localStorage.getItem('carMontobiker')) || []

// Query de Elementos
const crediMotorbike = document.querySelector('#crediMotorbike')


// Funciones
//----------

const carBikers = () => {
    carMontobiker.forEach((motorbiker)=>{
        crediMotorbike.innerHTML=`
        <div class="carBikers">
            <div class="imgCarbikers">
                <img src="${motorbiker.img}">
            </div>
            <div class="infCarbikers">
                <h5>${motorbiker.name}</h5>
                <h4>$${motorbiker.preci}</h4>
            </div>
            <a class="iconCarbikers">
                <svg class="cardIcon" xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="50" height="50" fill="#373736"><path d="M8.127,24l9.507-9.52a3.507,3.507,0,0,0,0-4.948L8.116,0,6,2.121l9.518,9.531a.5.5,0,0,1,0,.707L6.01,21.879Z"/></svg>
            </a>
        </div>
        `
    })
}

/*Rederizado aviso*/
carBikers() 