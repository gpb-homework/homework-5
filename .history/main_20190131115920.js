(function(){    

    /**
     * 
     * Создаем новый элемент и добавляем на страницу     
     * 
     */
    function click() {
        const elemApp = document.querySelector('.App');
        const wrapperEvents = document.querySelector('.wrapperEvents');        
       
        function handleOnClick(evt) {
            evt.preventDefault();
            console.log(evt);
            
            console.log('Hello');          
            wrapperEvents.classList.toggle('wide');  
        };
    
        function handleOnClick2() {
            console.log('Hello again!');                        
        }

        elemApp.onclick = () => {
            console.log('321')
        }
    
        wrapperEvents.onclick = function() { console.log("Hi"); };
        
        wrapperEvents.addEventListener("click", handleOnClick);
        
        wrapperEvents.addEventListener("click", handleOnClick2);
        
        wrapperEvents.addEventListener("transitionend", function() {
            console.log( "TRANSITION END" );
        });
    }
    // click();


    function capture() {
        const capturingElement = Array.from(document.querySelectorAll('.capturing div'));
        
        capturingElement.forEach(el => {
            // el.addEventListener('click', handleCapturing, true);
            el.addEventListener('click', handleCapturing, false);
        })

        function handleCapturing(evt) { 
            console.log(evt);           
            // this.style.backgroundColor = 'green';            
            alert(evt.target.classList);            
        }        
    }
    //capture();



    function submit() {                
        // const form = document.querySelector('.form');    
        // form.addEventListener('submit', (evt) => {
        //     evt.preventDefault();
        //     console.log('submit submit submit')            
        // });                
    }
    
    // submit();


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
