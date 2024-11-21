var nextbutton =document.querySelector('.next'),
    prevbutton = document.querySelector('.prev'),
    container=document.querySelector('.container'),
    slide=document.querySelector('.slide'),
    item=document.querySelectorAll('.item'),
    runningtime=document.querySelector('.timerunning')

let timerunning=3000
let timeAutoNext =7000

nextbutton.onclick = function(){
    showSlider('next')
}
prevbutton.onclick =function(){
    showSlider('prev')
}
let runTimeOut
let runNextAuto = setTimeout(()=>
{
    nextbutton.click()
},timeAutoNext)
function resetTimeAnimation(){
    runningtime.style.animation ='none'
    runningtime.offsetHeight
    runningtime.style.animation = null
    runningtime.style.animation ='runningtime 7s linear 1 forwards'
}
function showSlider(type){
    let sliderItemsDom = slide.querySelectorAll('.item')
    if(type == 'next'){
        slide.appendChild(sliderItemsDom[0])
        container.classList.add('next')
    }
    else{
        slide.prepend(sliderItemsDom[sliderItemsDom.length-1])
        container.classList.add('prev')
    }
    clearTimeout(runTimeOut)

    runTimeOut=setTimeout(()=>{
        container.classList.remove('next')
        container.classList.remove('prev')
    },timerunning)

    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(()=>{
        nextbutton.click()
    },timeAutoNext)
    
    resetTimeAnimation()
}
resetTimeAnimation()