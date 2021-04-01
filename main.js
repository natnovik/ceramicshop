import{
    myArray
} from './dataBase.js'

let eShop = myArray;


const div = document.getElementById(`ctn`);
const vitrine = document.querySelector(`.vitrine`);
const basket = document.querySelector(`.card-items`);
let models ="";

//to connect var with imported Array and to fulfill HTML 
for (let n=0; n < eShop.length; n++){
    models += `<div class="shop-item" id="shop-item${eShop[n].id}">                           
                    <img id="imgVitrine" src=${eShop[n].url} alt="model photo">
                    <div id = "spanContainer">
                        <span class="shop-item-title">${eShop[n].brand}</span>
                        <span class="shop-item-model">${eShop[n].model}</span>
                        <span class="shop-item-price">${eShop[n].price}€</span>
                    </div>
                    <div>
                        Quantity : <input min="0" id="qty" type="number" placeholder = "0">
                    </div>
                    <button class="shop-item-button" href="#" id="btn${eShop[n].id}">Buy</button>
                </div>`
}

div.innerHTML = models;

//EVENTLISTENER
    //add to Card   and  //remove from Card
    vitrine.addEventListener('click', sendToCard);
    basket.addEventListener('click', removeFromCard);

//DEFINITION of eventListener by introducing function for each 

function sendToCard(event) {
    //verify if chosen element is a button
    if(event.target.classList.contains('shop-item-button')){
        const myCard = event.target.parentElement
        getInfo(myCard)
    }
    function getInfo(myCard){
        const cardInfo = {
            img: myCard.querySelector(`#imgVitrine`).src,
            brand: myCard.querySelector(`.shop-item-title`).textContent,
            model: myCard.querySelector(`.shop-item-model`).textContent,
            qty: myCard.querySelector(`#qty`).value,
            price: myCard.querySelector(`.shop-item-price`).textContent
        } 
        //TO NOT ALLOW TO BUY 0 ARTICLES
        if (myCard.querySelector(`#qty`).value <=0 || myCard.querySelector(`#qty`).value == ""){
            alert("Your basket is empty!")
            return
        }else{
            addToCard(cardInfo) // IF IT NOT 0 LET'S FiNALLY ADD IT TO THE BASKET
        }
    }
    function addToCard(cardInfo) {
        let price = parseInt(cardInfo.price)
        console.log(price);
        //let price = parseInt(cardInfo.price.slice(0,-1))
        let div = document.createElement(`div`)
        div.setAttribute(`class`, `line`)

        div.innerHTML = `<img src="${cardInfo.img}" alt="model photo" class="imgCard">
                        <p>YOUR ARTICLES: ${cardInfo.brand} |  ${cardInfo.model} | QUANTITY:   ${cardInfo.qty} | PRICE: ${cardInfo.qty*price} €</p>
                        <a href="#" class="remove">X</a>`
        
         basket.appendChild(div)

         let allPrice = document.getElementsByClassName('line')
         //CREAT A TABLE FROM WHAT WAS COLLECTED
         allPrice=Array.from(allPrice)
         getTotal(allPrice)
    }            
}
function getTotal(allPrice){

     let sum = 0
    allPrice.forEach(item => {    //BE CAREFUL HERE

         sum += parseInt(item.children[1].innerHTML.slice(length -6,-2)) //EXPLANATION HERE
     });

     document.querySelector(`.cart-total-price`).innerHTML = sum
}
function removeFromCard(event){
    let total = document.querySelector(`.cart-total-price`).innerHTML
    let totalConvert = parseInt(total)
     event.preventDefault();

     if (event.target.classList.contains(`remove`)){
         event.target.parentElement.remove()
         let myPrice = parseInt(event.target.parentElement.children[1].innerHTML.slice(length - 6, - 2))  // WHY CHILDREN 1
         document.querySelector(`.cart-total-price`).innerHTML = totalConvert - myPrice;
     }
}
// let check = document.querySelector("#check")
// let span1 = document.querySelector("nav span:nth-last-child(3)")
// let span2 = document.querySelector("nav span:nth-last-child(2)")
// let span3 = document.querySelector("nav span:nth-last-child(1)")
// let navUl = document.querySelector("nav>ul")
// let body = document.querySelector("body")

// let boolCheck = false

// check.addEventListener("click",(e)=>{
//     boolCheck = !boolCheck

//     console.log(boolCheck)

//     if (boolCheck) {
//         span1.classList.add('span1')
//         span2.classList.remove('spanOn')
//         span2.classList.add('spanOff')
//         span3.classList.add('span3')
//         navUl.classList.add('slideBB')
//     }
//     else {
//         navUl.classList.remove('slideBB')
//         span1.classList.remove('span1')
//         span2.classList.add('spanOn')
//         span2.classList.remove('spanOff')
//         span3.classList.remove('span3')
//     }
// })