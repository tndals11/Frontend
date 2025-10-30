import React from 'react'

//! 자식 컴포넌트
// : 부모로부터 사용자에 대한 데이터를 전달(props)받아 UI로 반환
// - props는 객체 형태 

type User = {
  name: string;
  age: number;
  email: string;
}

type UserCardProps = { user: User }

// 구조 분해 할당 
// user라는 값을 받아서 반환
const UserCard = ({ user }: UserCardProps) => {
  console.log(user.name);
  console.log(user.age);

  // 구조분해 할당은 한 번도 사용하지 않으면 오류 발생
  const { name, age, email} = user;

  console.log(name);
  console.log(age);
  console.log(email);  

  return (
    <>
      <p>{user.name} / {user.age} / {user.email}</p>
      <p>{name} / {age} / {email}</p>
    </>
  )
}

function Props02() {
  const userData = {
    name: '이길동',
    age: 26,
    email: 'asd1234@gmail.com'
  }
  return (
    <div>
      {/* 
        == 콘솔창 / 컴포넌트 모두 두 번 실행 ==
        : React18 이후의 StrictMode가 개발 모드에서 부작용 탐지를 위해 두 번 렌더링
        > 실제 배포 환경에서는 한 번만 렌더링
      */}
      <UserCard user={{ name: '홍길동', age: 18, email: 'qwer123@naver.com'}} />
      <UserCard user={userData} />
    </div>
  )
}

export default Props02