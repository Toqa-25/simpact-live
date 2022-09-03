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
 elementorTabTitlesParents = [...document.querySelectorAll(".elementor-accordion-item")] ,
 newArray = [...document.querySelectorAll(".elementor-accordion-item:not(.elementor-active)")] ;

elementorTabTitles.forEach(elementorTabTitle => {
    elementorTabTitle.onclick = function (e){
        let title =  e.currentTarget,
            parentTitle = title.parentElement ;
        
            newArray.forEach( elementorTabTitlesParent => {
        elementorTabTitlesParent.classList.remove("elementor-active")
        })
        if (parentTitle.classList.contains("elementor-active")){            
           title.parentElement.classList.remove("elementor-active")
        }else{
            title.parentElement.classList.add("elementor-active")
    
        }
        newArray = [...document.querySelectorAll(".elementor-accordion-item:not(.elementor-active)")]
    }
    
})
