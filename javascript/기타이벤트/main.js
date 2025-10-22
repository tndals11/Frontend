document.addEventListener('DOMContentLoaded', () => {
  //! window.location.href = '경로값';
  // : 브라우저의 현재 페이지의 위치를 참조
  // - 브라우저에서 현재 페이지의 URL을 나타내는 속성
  console.log(window.location.href);

  //? window.location.href = '경로값';
  // : 해당 값을 새 URL로 설정하여 브라우저 이동 (리다이렉션)
  
  //? 리다이렉션(redirection)
  // : 웹 브라우저가 요청한 URL 대신 다른 URL로 자동 이동하도록 지시하는 기술

  //? 경로값
  // : 현재 URL을 기준으로 작성

  //1) '파일명'.html OR './파일명.html'
  //      >> 현재 페이지와 동일한 디렉토리에 있는 파일로 이동

  //2) '../파일명.html'
  //      >> 상위 디렉토리에 위치한 파일 검색
  //      +) ../../ 반복할 수록 상위 디렉토리를 찾아감
  
  // window.location.href = 'sub.html';

  const button = document.querySelector('button');

  button.addEventListener('click', () => {
    if (window.location.href.includes('index.html')) {
      window.location.href = 'sub.html';
    } else {
      window.location.href = 'index.html';
    }
  });
});