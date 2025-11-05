import React, { useState } from "react";

//! use State를 사용한 다양한 타입 상태 관리
// : 숫자, 문자, 논리, 객체, 배열
interface User {
  id: number;
  name: string;
}

const initialUser: User = {
  id: 1,
  name: "홍길동",
};

function State05() {
  //! === HOOKS === //
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [isVisable, setIsVisable] = useState<boolean>(false);
  const [user, setUser] = useState<User>(initialUser);
  const [items, setItems] = useState<string[]>([]);
  // : 배열의 경우 초기값에 주로 []빈 배열 설정

  //! === Event Handler === //
  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleAddItem = () => {
    const newItem = `Item ${items.length} `;
    setItems([...items, newItem]);
  };

  return (
    <div
      style={{ margin: "20px", padding: "20px", border: "1px solid tomato" }}
    >
      <h5>여러 타입의 상태관리</h5>
      {/* 숫자형: 카운트 증가 버튼 */}
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        증가
      </button>

      {/* 문자열: 사용자 이름 입력 필드 */}
      <p>Name: {name}</p>
      {/* 요소 내부의 이벤트 핸들러는 이벤트 객체의 타입 정의 불필요! */}
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      {/* 논리형: 토글 버튼 */}
      <p>Visavle? : {isVisable ? "✅" : "❌"}</p>
      <button onClick={() => setIsVisable(!isVisable)}>토글 버튼</button>

      {/* 객체: 사용자 정보 수정 입력 필드 */}
      <p>
        User: {user.id} / {user.name}
      </p>
      {/* 
      📌 객체 구조 자체는 리액트 Node 환경에 풀력할 수 없음 📌
      1) 객체의 속성 데이터를 출력
      2) 문자열 형식으로 변환하여 출력 - JSON.stringfy()
    */}
      {/* <p>User: {user}</p> */}
      <p>User: {JSON.stringify(user)}</p>

      <input
        type="text"
        name="id"
        value={user.id}
        onChange={handleUserChange}
      />
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleUserChange}
      />

      {/* 배열: 배열 요소 추가  */}
      <p>Items: {items}</p>
      <button onClick={handleAddItem}>아이템 추가</button>
    </div>
  );
}

export default State05;
