let count:number = 0;


function updateDistplay() {
  const countElement = document.getElementById('countValue');


  if(countElement) {
    // .textContent 속성은 문자열 타입
    countElement.textContent = count.toString();
  }
}

function increment() {
  count++;
  updateDistplay();
}

function decrement() {
  count--;
  updateDistplay();
}

document.addEventListener('DOMContentLoaded', () => {
  const incrementBtn = document.getElementById('incrementBtn');
  const decrementBtn = document.getElementById('decrementBtn');

  if (incrementBtn) incrementBtn.addEventListener('click', increment);

  if (decrementBtn) decrementBtn.addEventListener('click', decrement);
})