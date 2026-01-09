const body= document.querySelector('body')

body.addEventListener('click',(e)=>{

   //  console.log(e.clientX,e.clientY)  //gives x-coordinaate & y-coordinate

   const circleelement = document.createElement('div') //div element
   circleelement.classList.add('circle')  //Adds a CSS class named 'circle' to div element // same as <div class="circle"></div>
    
   circleelement.textContent='Hi'


   const color=['red','blue','orange','green','pink','purple']

   circleelement.style.backgroundColor= color[Math.floor(Math.random()*6)]

    circleelement.style.top=`${e.clientY-25}px` //string form me hi 
    circleelement.style.left=`${e.clientX-25}px` //center se start krane k liye 

    //adding element to body

    body.append(circleelement)
     
    //removing element from body 

    setTimeout(()=>{
        circleelement.remove()
    },5000)

  

})



