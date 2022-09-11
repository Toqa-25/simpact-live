let bar  = document.querySelector(".bar-btn");

bar.onclick = function (){
    if (this.classList.contains("collapsed")){
        this.innerHTML = ``
        this.innerHTML = ` <i class=" fa-solid fa-bars bar-icon"></i>`
    }else{
        this.innerHTML = ``
        this.innerHTML = ` <i class="fas fa-times close-icon"></i>`
        
    }
}

let showMoreButtons = [...document.querySelectorAll(".readMore")] ;
showMoreButtons.forEach(showMoreButton => {
    showMoreButton.onclick = function (e){
      let pElelment= e.currentTarget.parentElement
        if (pElelment.classList.contains("showlesscontent")){
            pElelment.classList.remove("showlesscontent")
            pElelment.classList.add("showmorecontent")
        }
        showLessButtons = [...document.querySelectorAll(".readLess")]
    }

})
let showLessButtons = [...document.querySelectorAll(".readLess")] ;
if (showLessButtons){
    showLessButtons.forEach(showLessButton => {
        showLessButton.onclick = function (e){
          let pElelment= e.currentTarget.parentElement
          console.log(pElelment)
            if (pElelment.classList.contains("showmorecontent")){
                pElelment.classList.remove("showmorecontent")
                pElelment.classList.add("showlesscontent")
            }
            showMoreButtons = [...document.querySelectorAll(".readMore")]
        }
        
    })
}

let elementorTabTitles = [...document.querySelectorAll(".elementor-tab-title")] ,
 elementorTabTitlesParents = [...document.querySelectorAll(".elementor-accordion-item")] ;

elementorTabTitles.forEach(elementorTabTitle => {
    elementorTabTitle.onclick = function (e){
        let title =  e.currentTarget,
            parentTitle = title.parentElement ;

        if (parentTitle.classList.contains("elementor-active")){            
           title.parentElement.classList.remove("elementor-active")
        }else{
            title.parentElement.classList.add("elementor-active")
    
        }
        
        elementorTabTitlesParents.forEach( elementorTabTitlesParentElement => {
                if (elementorTabTitlesParentElement !== parentTitle && elementorTabTitlesParentElement.classList.contains("elementor-active")  ){
                    elementorTabTitlesParentElement.classList.remove("elementor-active")
                    console.log ("no")
                }
        })
    }
    
})

// .elementor-widget-container.show-elementor
let purchasesCar = document.querySelector(".purchases-car");
let elementorWidget = document.querySelector(".elementor-widget-container")
let CloseElementorWidget = document.querySelector(".close-elementor-widget")
purchasesCar.onclick = (e) => {
    elementorWidget.classList.add("show-elementor")
}

CloseElementorWidget.onclick = (e) => {
    elementorWidget.classList.remove("show-elementor")
}  
if (elementorWidget ){
    CloseElementorWidget.onclick = (e) => {
        elementorWidget.classList.remove("show-elementor")
    }  
}

/************************************************* */

// let orderNumber = 0;
function drowartElements(){

}

let shoppingCartContainer = document.querySelector(".cart_html_cnt"),
     addedItems = [...document.querySelectorAll(".cart_html_cnt .order-section") ] ,
     removeCartItems = [...document.querySelectorAll(".order-section .column-right ") ] ,
     orderNumber = document.querySelector(".order-number"),
     carItemsNumber = document.querySelector(".item-count"),
     cartPrice = document.querySelector(".total-section .right-column p "),
     orderPrices = [...document.querySelectorAll(".cart_html_cnt .order-section .order-ammount ")]
     orderNumber.innerHTML= addedItems.length
     carItemsNumber.innerHTML= addedItems.length
     let count ;
     
     function getOrderPrice(){
        count = 0;
         if (orderPrices != []){
             orderPrices.map(orderPrice => {
                 console.log (orderPrice.innerHTML.replace("$" , ""))
                 console.log (parseInt(orderPrice.innerHTML.replace("$" , "")))
                 count += parseInt(orderPrice.innerHTML.replace("$" , ""))
                })
            }
        }
getOrderPrice()
 cartPrice.innerHTML = addedItems == [] ? `0$` : `${count}$`
 cartPrice.innerHTML = addedItems == [] ? `0$` : `${count}$`
 cartPrice.innerHTML = addedItems == [] ? `0$` : `${count}$`

     function removeUnneadedItems (){
         removeCartItems.forEach(removeCartItem => {
             removeCartItem.onclick = function(e){
                 let orderSection = removeCartItem.parentElement
                 orderSection.remove()
                 
                 addedItems   = [...document.querySelectorAll(".cart_html_cnt .order-section") ]
                 orderNumber.innerHTML = addedItems.length
                 carItemsNumber.innerHTML = addedItems.length
                 console.log(removeCartItem)
             }
          })
     }
     removeUnneadedItems ()
let addButtons = [...document.querySelectorAll(".add_to_cart")]
addButtons.forEach(addButton => {
    addButton.onclick = function (e){
      let currentElement = e.currentTarget,
      buttonParent= e.currentTarget.parentElement,
          buttonCart = buttonParent.parentElement ,
          cartImg = buttonCart.firstElementChild ,
          cartHead = cartImg.nextElementSibling,
          cartPrice = currentElement.lastElementChild 
          if (addedItems != []){
            if 
         (addedItems.some(addedItem => buttonCart.dataset.id == addedItem.dataset.id )){
             console.log('some')
         }else{
                    shoppingCartContainer.innerHTML += 
                    `<div class="order-section" data-id="${buttonCart.dataset.id}">
                    <div class="column-left">
                    <img src="${cartImg.src}">
                    </div>
                    <div class="column-center">
                    <h2>
                    ${cartHead.innerHTML}
                    </h2>
                    <span class="order-number">1 </span>
                    <span>×</span>
                    <span class="order-ammount"> ${cartPrice.innerHTML}</span>
                    </div>
                    <div class="column-right">
                    <button data-pid="28"><img draggable="false" role="img" class="emoji" alt="✖" src="https://s.w.org/images/core/emoji/13.1.0/svg/2716.svg"></button>
                    </div>
                    </div>`
                    addedItems = [...document.querySelectorAll(".cart_html_cnt .order-section") ] 
                    removeCartItems = [...document.querySelectorAll(".order-section .column-right ") ]
                    console.log (shoppingCartContainer)
                    removeUnneadedItems ()
                    orderNumber.innerHTML = addedItems.length
                    carItemsNumber.innerHTML = addedItems.length
                    orderPrices = [...document.querySelectorAll(".cart_html_cnt .order-section .order-ammount ")]
                    getOrderPrice()
         }

          }else{
            shoppingCartContainer.innerHTML += 
                    `<div class="order-section" data-id="${buttonCart.dataset.id}">
                    <div class="column-left">
                    <img src="${cartImg.src}">
                    </div>
                    <div class="column-center">
                    <h2>
                    ${cartHead.innerHTML}
                    </h2>
                    <span class="order-number">1 </span>
                    <span>×</span>
                    <span class="order-ammount"> ${cartPrice.innerHTML}</span>
                    </div>
                    <div class="column-right">
                    <button data-pid="28"><img draggable="false" role="img" class="emoji" alt="✖" src="https://s.w.org/images/core/emoji/13.1.0/svg/2716.svg"></button>
                    </div>
                    </div>`
           addedItems = [...document.querySelectorAll(".cart_html_cnt .order-section") ] 
           removeCartItems = [...document.querySelectorAll(".order-section .column-right ") ]
           removeUnneadedItems ()
           orderNumber.innerHTML = addedItems.length
           carItemsNumber.innerHTML = addedItems.length
           orderPrices = [...document.querySelectorAll(".cart_html_cnt .order-section .order-ammount ")]
           getOrderPrice()
          }
       
    }

})
