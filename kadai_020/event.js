const txt =document.getElementById('text');
const button = document.getElementById('btn');


button.addEventListener('click', () => {
  txt.textContent = 'ボタンをクリックしました';
});