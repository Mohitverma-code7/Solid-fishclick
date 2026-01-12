const redButton = document.querySelectorAll('.button');


const body = document.querySelector('body');
redButton.forEach(button => {
    button.addEventListener('click',function(e){
        if (e.target.id === 'red') {
            body.style.backgroundColor = "red"
        }
    })
    button.addEventListener('click',function(e){
        if (e.target.id === 'gray') {
            body.style.backgroundColor = "gray"
        }
    })
    button.addEventListener('click',function(e){
        if (e.target.id === 'white') {
            body.style.backgroundColor = "white"
        }
    })
    button.addEventListener('click',function(e){
        if (e.target.id === 'blue') {
            body.style.backgroundColor = "blue"
        }
    })
    
});