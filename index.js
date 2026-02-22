import { countryList } from "./countries.js";
const enableList1 = document.getElementById("enableList1")
const enableList2 = document.getElementById("enableList2")
const list1 = document.getElementById('list1')
const list2 = document.getElementById('list2')
const convertBtn = document.getElementById('convert-btn')
const swapBtn = document.getElementById('swap-btn')
const convertFrom = document.getElementById('convertFrom')
const convertTo = document.getElementById('convertTo')
const countryFrom = document.getElementById('countryFrom')
const countryTo = document.getElementById('countryTo')
const input = document.getElementById('amount')
const convertedPrice = document.getElementById('convertedPrice')

enableList1.addEventListener("click",()=>{
    list1.classList.toggle('hidden')
    enableList1.classList.toggle('rotate')
})
enableList2.addEventListener("click",()=>{
    list2.classList.toggle('hidden')
    enableList2.classList.toggle('rotate')
})


list1.addEventListener("click",(e)=>{
    const selectedItem = e.target.closest('li')
    const selectedCountry = selectedItem.dataset.countrytag
    countryFrom.innerHTML = `
    <img src="https://flagsapi.com/${countryList[selectedCountry]}/flat/64.png">
    <p id="convertFrom">${selectedCountry}</p>
    `
    list1.classList.toggle('hidden')
    enableList1.classList.toggle('rotate')
})
list2.addEventListener("click",(e)=>{
    const selectedItem2 = e.target.closest('li')
    const selectedCountry2 = selectedItem2.dataset.countrytag
    countryTo.innerHTML = `
    <img src="https://flagsapi.com/${countryList[selectedCountry2]}/flat/64.png">
    <p id="convertTo">${selectedCountry2}</p>
    `
    list2.classList.toggle('hidden')
    enableList2.classList.toggle('rotate')
})

convertBtn.addEventListener("click",()=>{

})

swapBtn.addEventListener("click",()=>{

})

