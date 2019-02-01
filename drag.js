;(function(){
    const url = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
    const imageContainer = document.getElementById('ImageDrag');
    const image = new Image(300);
    image.src = url;
    
    imageContainer.appendChild(image);

    function changeUmage() {
        let cleatT;
        clearTimeout(cleatT);
        cleatT = setTimeout(() => {
            image.src = `https://source.unsplash.com/random?v=${Math.random()}`; 
        }, 66);
    }

    const handleMouseMove = (evt) => {
        const x = evt.pageX;
        const y = evt.pageY;           
        imageContainer.style.top = `${y - imageContainer.offsetHeight / 2}px`;
        imageContainer.style.left = `${x - imageContainer.offsetWidth / 2}px`;         
        
        changeUmage()
    }

    imageContainer.addEventListener('mousedown', () => {                
        document.addEventListener('mousemove', handleMouseMove);
    })

    imageContainer.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', handleMouseMove);
        console.log('mouseup');        
    })


    imageContainer.addEventListener('dragstart', (evt) => {        
        evt.preventDefault();
    })    
}())