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
  document.body.addEventListener('keydown', function(event) {
   
    for(let i = 0; i <= codes.length; i++) {
      let index = 0;
      if(event.key === codes[i]) {
        console.log(event.key);
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
