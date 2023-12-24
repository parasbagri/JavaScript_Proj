//getting some values to document 

const multiSatge = document.getElementById('mulStage')
const box1 = document.getElementById('bo-1')
const box2 = document.getElementById('bo-2')
const box3 = document.getElementById('bo-3')
const myAudio = document.getElementById('myAudio')
const myAudio2 = document.getElementById('myAudio2')
const myAudio3 = document.getElementById('myAudio3')
const image = document.getElementById('image') 
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')

 
image.style.display = 'none';
image2.style.display = 'none';
image3.style.display = 'none';

//Box-1
box1.addEventListener('click', function(){
    document.body.style.background ="skyblue";
    // image.style.display = 'block';
   image2.style.display = 'none'
   image3.style.display ='none'
   image.style.display = 'block'
    // myAudio.play();
    playA();
    myAudio2.pause()
    myAudio3.pause()

}) 
function playA(){
     myAudio.play();
} 
 
// Box-2
box2.addEventListener('click', function(){
    document.body.style.background = 'Red'
    image.style.display ='none'
    image3.style.display = 'none'
    image2.style.display = 'block'
    myAudio2.play();
    myAudio.pause(); 
    myAudio3.pause()

})
// Box-3
box3.addEventListener('click', function(){
    document.body.style.background = 'green'
    image.style.display ='none'
    image3.style.display = 'block'
    image2.style.display = 'none'
    myAudio2.pause();
    myAudio.pause(); 
    myAudio3.play()

}) 
 



 