// ? 부모객체.appendChild(자식 객체)
// : 선택된 부모 요소의 자식 요소 리스트 제일 마지막에 추가


document.addEventListener('DOMContentLoaded', () => {
  const header = document.createElement('h1');

  // 생성된 태그 조작
  header.textContent = '문서 객체를 동적으로 생성';
  header.setAttribute('data-custom', '사용자 정의 속성');
  header.style.color = 'white';
  header.style.backgroundColor = 'black';

  document.body.appendChild(header);
});

  const divA = document.getElementById('first');
  const divB = document.getElementById('second');

  const h2 = document.createElement('h2');
  h2.textContent = '이동하는 h2 태그';

  const toFirst = () => {
    divA.appendChild(h2);
    setTimeout(toSecond, 2000);
  }

  const toSecond = () => {
    divB.appendChild(h2);
    setTimeout(toFirst, 2000);
  }

  toFirst();

  // ! 문서 객체 제거
  // : 부모객체.removeChild(자식객체)
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const h3 = document.querySelector('h3');

      // cf) 문서객체.parentNode: 해당 문서 객체의 부모 객체를 지정

      // a >> b >> c >> d
      // d요소.parentNode === c요소 반환
      
      h3.parentNode.removeChild(h3);
    }, 3000);
  })