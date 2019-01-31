(function(){

    /**
     * 
     * Создаем новый элемент и добавляем на страницу     
     * 
     */
    function click() {
        const collectionQueryElenent = document.querySelectorAll('.query');
       
        function handler1() {
            alert('Спасибо!');
          };
        
          function handler2() {
            alert('Спасибо ещё раз!');
          }
        
          elem.onclick = function() { alert("Привет"); };
          elem.addEventListener("click", handler1); // Спасибо!
          elem.addEventListener("click", handler2); // Спасибо ещё раз!            
    }
    //create();




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
            drawGreen(el);             
            const parent = el.parentNode;
            const id = parent.getAttribute('id')                 
            if(!id) {
                setTimeout(() => {
                    drawGreen(parent);
                    catchParent(parent)
                }, 300);        
            } else {
                decorateChildren(parent);
                drawGreen(parent)                      
            };
        }


        /** 
         * Проход вниз по девеву  
         * 
         * */
        function decorateChildren(el) {         
            // фильтруем дочерные элементы, так как там может быть символ переноса строки
            // берем первый элемент из массива [0]
            const child = filterChild(el)[0];                   
            
            if(count === attempt) {
                hypnoticToad.appendChild(img);
                return;
            } 

            if(child) {
                setTimeout(() => {
                    drawBlack(child);                
                    decorateChildren(child);
                }, 300)            
            } else {            
                count++;        
                setTimeout(() => {
                    drawBlack(el);
                    catchParent(el);
                }, 300)                        
            }
        }
        
        // child.style.webkitTransform = "rotate(-2deg)";
        catchParent(child);    
    
    }
    // recursion();


    function filterChild(el) {      
        const collection = Array.from(el.childNodes);    
        return collection.filter(c => c.tagName === 'DIV')                       
    }
    // child();
}());
