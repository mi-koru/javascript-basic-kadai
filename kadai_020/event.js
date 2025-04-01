const btn = document.getElementById('btn');



btn.addEventListener('click' , () => {
const h2 = document.createElement('h2');
h2.textContent ='ボタンをクリックしました';

//console.log(h2);


document.body.appendChild(h2);
});
