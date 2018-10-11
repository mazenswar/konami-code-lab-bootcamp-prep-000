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

 
 
function init() {
  let index = 0;
  document.body.addEventListener('keydown', function(event) {
   
    for(let i = 0; i < codes.length; i++) {
      if(event.key === codes[i]) {
        console.log(event.key);
        index++; 
        if(index === codes.length - 1) 
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
