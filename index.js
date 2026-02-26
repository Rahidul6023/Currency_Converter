import { countryList } from "./countries.js";
const enableList1 = document.getElementById("enableList1")
const enableList2 = document.getElementById("enableList2")
const list1 = document.getElementById('list1')
const list2 = document.getElementById('list2')
const swapBtn = document.getElementById('swap-btn')
let convertFrom = document.getElementById('convertFrom')
let convertTo = document.getElementById('convertTo')
const countryFrom = document.getElementById('countryFrom')
const countryTo = document.getElementById('countryTo')
const input = document.getElementById('amount')
const convertedPrice = document.getElementById('converted-price')
const today = new Date()
const day = today.getDate()
const month = today.getMonth() +1
const year = today.getFullYear()
const nav = document.querySelector('nav')
const URL = "https://open.er-api.com/v6/latest/USD"
const resultArea = document.getElementById('converted-price')

console.log(day,month,year)

const DateHtml = `
                <span id="Date">
                    <i class="fa-regular fa-calendar"></i>
                    ${day}/${month}/${year}
                </span>
                `
nav.innerHTML = DateHtml

enableList1.addEventListener("click",()=>{
    list1.classList.toggle('hidden')
    enableList1.classList.toggle('rotate')
})
enableList2.addEventListener("click",()=>{
    list2.classList.toggle('hidden')
    enableList2.classList.toggle('rotate')
})


list1.addEventListener("click",async (e)=>{
    const selectedItem = e.target.closest('li')
    const selectedCountry = selectedItem.dataset.countrytag
    countryFrom.innerHTML = `
    <img src="https://flagsapi.com/${countryList[selectedCountry]}/flat/64.png">
    <p id="convertFrom">${selectedCountry}</p>
    `
    list1.classList.toggle('hidden')
    enableList1.classList.toggle('rotate')
    convertFrom = document.getElementById('convertFrom')
    let result = await getConverted(Number(input.value),convertFrom.textContent.trim(),convertTo.textContent.trim())
    resultArea.textContent = result
})
list2.addEventListener("click",async (e)=>{
    const selectedItem2 = e.target.closest('li')
    const selectedCountry2 = selectedItem2.dataset.countrytag
    countryTo.innerHTML = `
    <img src="https://flagsapi.com/${countryList[selectedCountry2]}/flat/64.png">
    <p id="convertTo">${selectedCountry2}</p>
    `
    list2.classList.toggle('hidden')
    enableList2.classList.toggle('rotate')
    convertTo = document.getElementById('convertTo')
    let result = await getConverted(Number(input.value),convertFrom.textContent.trim(),convertTo.textContent.trim())
    resultArea.textContent = result
})

async function getConverted(amount,from,to){
    let response = await fetch(URL)
    let usableData = await response.json()
    return amount/usableData.rates[from] *usableData.rates[to]
}

input.addEventListener("input",async ()=>{
    convertFrom = document.getElementById('convertFrom')
    convertTo = document.getElementById('convertTo')
    let result = await getConverted(Number(input.value),convertFrom.textContent.trim(),convertTo.textContent.trim())
    resultArea.textContent = result
})

swapBtn.addEventListener("click",()=>{
    let temp = input.value
    input.value = convertedPrice.textContent
    if(temp==="")
    convertedPrice.textContent = "0"
    else convertedPrice.textContent = temp
    temp = countryFrom.innerHTML
    countryFrom.innerHTML = countryTo.innerHTML
    countryTo.innerHTML = temp
})

