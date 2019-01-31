(function(){      
    function capture() {
        const capturingElement = Array.from(document.querySelectorAll('.capturing div'));
        
        capturingElement.forEach(el => {
            el.addEventListener('click', handleCapturing, true);
            el.addEventListener('click', handleCapturing, false);
        })

        function handleCapturing(evt) { 
            // console.log(evt);                       
            // alert(evt.target.classList);            
        }        
    }
    capture();



    function submit() {                
        const form = document.querySelector('.form');    
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            console.log('submit submit submit')            
        });                
    }
    
    submit();


    function delegate() {
        const table = document.querySelector('.table');    
        const cellClick = document.querySelector('.cellClick');    

        const handle = (evt) => {                                        
            // console.log(evt.target, evt.target.tagName);                        
            evt.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        }            

         table.addEventListener('click', (evt) => {                                                
            evt.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
         });                                
    }
    
    delegate();    
}());
