// task1
//    document.getElementById('red').addEventListener('click' , function (e) {
//         alert("clicked")
//     },false)
    
// task2

// document.getElementById('red').addEventListener('click',function(){
//        let main = document.querySelector('p');
//        let sand = document.createElement('p')
//        sand.innerHTML = 'hello world'
//        main.replaceWith(sand)

// })


// document.getElementById('red').addEventListener('click',function(){
// document.querySelector('p').textContent = 'hello world'

// })   

// document.getElementById('fed').addEventListener('click',function(){
// document.querySelector('p').textContent = 'hello'

// })   

// task3

// let box = document.getElementById('ded');

// box.addEventListener(`mouseenter`, function(){
//     box.style.backgroundColor = 'blue';
// });
// box.addEventListener(`mouseleave`, function(){
//     box.style.backgroundColor = 'gray';
// });

// task4

// let keyPress = document.getElementById('key');
// let output = document.getElementById('output')

// keyPress.addEventListener('keydown',function (e) {
//     output.textContent = `you pressed:${e.key}`
// })

// task5

// const form = document.getElementById('loginForm');
// const username = document.getElementById('username');
// const message = document.getElementById('message');

// form.addEventListener('submit',function(e){
//     e.preventDefault();

//     if (username.value.trim() === '') {
//         message.textContent = "Username is required!";
//         message.style.color = 'red';
//     } else {
//         message.textContent = "login successful";
//         message.style.color = 'green'
//     }
// })

// task6

// let font = document.getElementById('text');
// let message = document.getElementById('output')

// font.addEventListener('input',function(){
//     message.textContent = `you type ${text.value.length}`;
// })


// task7

// const toggleBtn = document.getElementById('toggle');

// // load saved theme
// if (localStorage.getItem('theme') === 'dark') {
//   document.body.classList.add('dark');
//   toggleBtn.textContent = 'Light Mode';
// }

// toggleBtn.addEventListener('click', function () {
//   document.body.classList.toggle('dark');

//   const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
//   localStorage.setItem('theme', theme);

//   toggleBtn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
// });
