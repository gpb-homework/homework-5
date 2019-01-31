(function(){

    /**
     * 
     * Создаем новый элемент и добавляем на страницу     
     * 
     */
    function click() {
        const elemApp = document.querySelector('.App');
        const wrapperEvents = document.querySelector('.wrapperEvents');        
       
        function handleOnClick() {
            console.log('Hello');          
            elem.classList.toggle('wide');  
          };
        
          function handleOnClick2() {
            console.log('Hello again!');                        
          }
        
          wrapperEvents.onclick = function() { console.log("Hi"); };
          
          wrapperEvents.addEventListener("click", handler1);
          
          wrapperEvents.addEventListener("click", handler2);
          
          wrapperEvents.addEventListener("transitionend", function() {
            console.log( "TRANSITION END" );
          });
    }
    click();




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
}());
