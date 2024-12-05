let b = true
document.querySelectorAll('.porfoliy').forEach(item => {
    item.addEventListener('click', ()=>{
        if(b){
            item.style.height ='230px'
            item.style.widht = '150px'
            item.style.borderRadius ='200%'
            b = false
        }
        else{
            item.style.borderRadius = '0    %'
            b = true        }
    })
})
document.querySelectorAll('.answe.text1').forEach(item => {
    item.addEventListener('click', ()=>{
        if(b){
            b = false
            item.style.height ='300px'
            
        }
        else{
            b = true
            item.style.height = '160px'
                    }
    })
})  
document.querySelectorAll('.answe.text2').forEach(item => {
    item.addEventListener('click', ()=>{
        if(b){
            b = false
            item.style.height ='300px'
            
        }
        else{
            b = true 
            item.style.height = '160px'
                   }
    })
}) 
document.querySelectorAll('.answe.text3').forEach(item => {
    item.addEventListener('click', ()=>{
        if(b){
            b = false
            item.style.height ='300px'
            
        }
        else{
            b = true 
            item.style.height = '160px'
                   }
    })
}) 