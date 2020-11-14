
// Selectores
const inputData = document.querySelector('input');
const btnMain = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const result = document.querySelector('.amount');
const resultRate = document.querySelector('.amount-rate');
const totalContainer = document.querySelectorAll('.total')


//Declarations
const mainUrl = 'https://rates.airtm.io/air-rates'

// Payoneer USD -> air-rates ( {USD.methods[87] } )
// Peso arg -> air-rates ( { ARS.methosds[0] } )


// Valores 
const AIRTM_FEE = 0.4;

const USD_COMPRA = 1.049;
const USD_VENTA = 0.96;
const ARS_COMPRA = 165.07;
const ARS_VENTA = 155.73;


/* Calculate */
const calculate = () => {
    
    let usd_value = inputData.value;
    
    if(usd_value) {
        let usd_per_airtm = 1/USD_COMPRA;
        let airtm_buyed = usd_value * usd_per_airtm;
        airtm_buyed -= AIRTM_FEE * 2;
        let ars_buyed = airtm_buyed * ARS_VENTA; 
        let rounded_ars = Math.round(ars_buyed * 100) / 100;
        let rounded_rate = Math.round(ars_buyed/usd_value * 100) / 100;
        
        result.innerText = `$ ${rounded_ars.toLocaleString()}`;
        resultRate.innerText = `$ ${rounded_rate.toLocaleString()}`;
        totalContainer.forEach(element => {
            element.setAttribute('style', 'display: block')
        });
    }

}

const reset = () => {
    totalContainer.forEach(element => {
        element.setAttribute('style', 'display: none')
    });
    inputData.value = '';
}

/* On enter event */

inputData.onkeyup = (e)=> {
    if (e.keyCode === 13) {
        calculate();
    }
}
