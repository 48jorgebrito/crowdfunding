const imgMenu = document.querySelector(".imgMenu")
const Menu =document.querySelector(".menu")
const Overlow = document.querySelector(".overlow")
const Modal = document.querySelector(".modal")
let Btn = document.querySelectorAll(".btn")
const CloseModal = document.querySelector(".close_modal")
const htmlDom = document.getElementById("htmldom")




imgMenu.addEventListener("click", function(){
    imgMenu.classList.toggle("active")
    if (imgMenu.classList.contains("active")){
        imgMenu.src="img/icon-close-menu.svg"
    }else if(imgMenu.src="img/icon-close-menu.svg"){
        imgMenu.src="img/icon-hamburger.svg"
    }
    Menu.classList.toggle("menu_active")
    Overlow.classList.toggle("overlow_active")
} )
Overlow.addEventListener("click", function(){
    Menu.classList.remove("menu_active")
    imgMenu.classList.remove("active")
    imgMenu.src="img/icon-hamburger.svg"
    Overlow.classList.toggle("overlow_active")
    
    
})

for (let i = 0; i < Btn.length; i++){
    Btn[i].addEventListener("click", function(){
        Modal.classList.toggle("modal_active")
        htmlDom.classList.toggle("overlow_hidden")
    })
}

CloseModal.addEventListener("click", function(){
    Modal.classList.toggle("modal_active")
    htmlDom.classList.toggle("overlow_hidden")
})


let modal1 = document.querySelector(".project_modal1")
let modal2 = document.querySelector(".project_modal2")
let chec = document.querySelectorAll(".check")
let modalPledge = document.querySelector(".modal_pledge")


 
  
for(let i = 0; i < chec.length; i++){
    chec[i].addEventListener("click", function(){
         if(chec[i].value == "opcao1"){
             modal1.classList.add("project_modal_active")
             
         }else{
             modal1.classList.remove("project_modal_active")
             
         }
         if(chec[i].value == "opcao2"){
             modal2.classList.add("project_modal_active")
             
         }else{
             modal2.classList.remove("project_modal_active")
         }
         if(chec[i].value == "pledge"){
            modalPledge.style.border="1px solid #3cb4ac"
            
        }else{
            modalPledge.style.border="1px solid #cccc"
        }
    })
}
 
  
 let btnThanks = document.querySelector(".btn_thanks")
 let modalThanks = document.querySelector(".modal_thanks")
 let btnModal = document.querySelectorAll(".btn_modal")
 
 for(let i = 0; i < btnModal.length; i++){
     btnModal[i].addEventListener("click", function(){
        modalThanks.style.display="block"  
     })
 }
 
 
 
 btnThanks.addEventListener("click", function(){
   modalThanks.style.display="none"  
 })

    
 let demo = document.querySelectorAll(".demo")   


   
