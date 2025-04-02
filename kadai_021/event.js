const btn = document.getElementById('btn');
const text = document.getElementById('text');


btn.addEventListener('click',() => {

setTimeout(() => {
  text.textContent = 'ボタンをクリックされました';

  console.log('text'); // 2秒後にコンソール出力
}, 2000);
});
