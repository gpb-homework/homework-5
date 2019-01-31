(function(){

    /**
     * 
     * Создаем новый элемент и добавляем на страницу     
     * 
     */
    function create() {
        const collectionQueryElenent = document.querySelectorAll('.query');
        const appElenent = document.querySelector('.App');    
        const divResult = document.createElement('div');
        const textNode = document.createTextNode(`element count ${collectionQueryElenent.length}`);
        divResult.setAttribute('class', 'result');    
        divResult.appendChild(textNode);    
    
        const fragment = document.createDocumentFragment();
    
        for(let i = 0; i < 100; i++) {
            const div = document.createElement('div');
            div.style.background = 'red';
            div.style.width = '100px';
            div.style.height = '100px';            
            div.style.marginBottom = '10px';
            fragment.appendChild(div);                     
        }        
        appElenent.appendChild(fragment);
        
        //console.log(appElenent.nodeType, appElenent.nodeName, appElenent.nodeValue);    
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
