const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click',() => {
text.textContent = 'ボタンをクリックされました';
})

setTimeout(() => {
  console.log('text');
},2000);