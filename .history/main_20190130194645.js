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


        for(let i = 0; i < 100000000000; i++) {}

        console.log('sadlkfhakjsdfhgjsgf');
        
        table.addEventListener('click', (evt) => {                                        
            // console.log(evt.target, evt.currentTarget);                        
            evt.target.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        });                
    }
    
    delegate();


    /**
     * 
     * Обход DOM дерева     
     *
     */
    function recursion() {        
        const child = document.getElementById('ChildBlock');  
        const hypnoticToad = document.querySelector('.hypnoticToad');
        const img = new Image(363, 314);
        img.src = 'http://i.absurdopedia.net/4/48/Hypno_large.gif';
        
        
        let count = 0;
        const attempt = 2;

        function drawGreen(el) {
            el.style.border = '2px solid green';            
        }

        function drawBlack(el) {
            el.style.border = '5px solid #000';            
        }



        /** 
         * Подъем вверх по дереву
         * 
         * */
        function catchParent(el) {   
           
        }


        /** 
         * Проход вниз по девеву  
         * 
         * */
        function decorateChildren(el) {         
           
        }
        
        // child.style.webkitTransform = "rotate(-2deg)";
        catchParent(child);    
    
    }
    // recursion();

    const quie = [
        'click', 'focus', 
    ]
}());
