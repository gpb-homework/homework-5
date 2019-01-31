(function(){

    /**
     * 
     * Создаем новый элемент и добавляем на страницу     
     * 
     */
    function click() {
        const elem = document.querySelector('.Create');
       
        function handler1() {
            console.log('Hello');            
          };
        
          function handler2() {
            console.log('Hello again!');                        
          }
        
          elem.onclick = function() { console.log("Hi"); };
          elem.addEventListener("click", handler1);
          elem.addEventListener("click", handler2);
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
