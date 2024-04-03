const body = document.body

const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const righttBtn = document.getElementById('right')

let activeSlide = 0

righttBtn.addEventListener('click',() => {
   activeSlide++
   if(activeSlide > slides.length - 1) {
        activeSlide = 0
   }
   setActiveSlide()
   setBgToBody()
   console.log(activeSlide)
})

leftBtn.addEventListener('click',() => {
    activeSlide--
    if(activeSlide < 0) {
        activeSlide = slides.length - 1
   }
    setActiveSlide()
    setBgToBody()
    console.log(activeSlide)
 })

 function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
 }
 
 setBgToBody()

 function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
 }