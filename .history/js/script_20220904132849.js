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
/* <a class="elementor-button elementor-size-sm add_to_cart" data-pid="26" role="button"><svg aria-hidden="true" class="svg-inline--fa fa-cart-shopping" focusable="false" data-prefix="fas" data-icon="cart-shopping" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"></path></svg><!-- <i aria-hidden="true" class="fas fa-shopping-cart"></i> Font Awesome fontawesome.com --> Purchase $285.00</a> */

let shoppingCartContainer = document.querySelector(".cart_html_cnt"),
     addedItems = [...document.querySelectorAll(".cart_html_cnt .order-section") ] ,
     removeCartItems = [...document.querySelectorAll(" .order-section") ]
    //  column-right
     addedItems.forEach(addedItem => {
       let
     })
let addButtons = [...document.querySelectorAll(".add_to_cart")]
addButtons.forEach(addButton => {
    addButton.onclick = function (e){
      let currentElement = e.currentTarget,
      buttonParent= e.currentTarget.parentElement,
          buttonCart = buttonParent.parentElement ,
          cartImg = buttonCart.firstElementChild ,
          cartHead = cartImg.nextElementSibling
          console.log (currentElement , buttonParent , buttonCart  )
       
       
    }

})

