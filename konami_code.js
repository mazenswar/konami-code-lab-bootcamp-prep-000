const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

 let index = 0;
 const body = document.body;
 
function init() {
  body.addEventListener('keydown', function(event) {
   
    for(let i = 0; i < codes.length; i++) {
      
      if(event.key === codes[i]) {
        
        index++; 
        if(index === codes.length) 
        {
            alert("You did it!");
            index = 0;
          }
      }
      
       else
       {
        index = 0;}
    }
        
        
    }
  );
}
