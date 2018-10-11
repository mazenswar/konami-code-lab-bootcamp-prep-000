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
  // your code here
  document.addEventListener('keydown', function(event) {
    let index = 0;
    
    for(let i = 0; i <= codes.length; i++) {
      
      if(event.code === codes[i]) {
        
        index++; 
        
        if(index.length === codes.length) 
        {
            alert("You did it!");
          }
        
      }
      else{
        index = 0;}
    }
  });
}
