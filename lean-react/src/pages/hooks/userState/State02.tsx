import React, { useState } from 'react'

//! useState: "컴포넌트 내에서" 데이터에 대한 상태 관리 
// - 주로 UI에서 발생하는 이벤트에 반응하여 상태 변화

interface Login {
  id: string;
  password: string;
}

const loginInitialValue: Login = {
  id: '',
  password: ''
}


function State02() {
  //% === HOOK (useState) === //
  const [inputValue, setInputValue] = useState<string>();

  // const [id, setId] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  const [login, setLogin] = useState<Login>(loginInitialValue);

  // 정규식 패턴
  const [isIdValid, setIsIdValid] = useState<boolean | undefined> (undefined);
  const [isPwValid, setIsPwValid] = useState<boolean | undefined> (undefined);
  const {id, password} = login; // 구조 분해 할당


  const idPattern = /^[a-z0-9]{4,12}$/;
  const pwPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;

  //% === EVENT HANDLER === //
  // Union타입 
  const hadleInpuChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    // input 창에 change 변화가 일어나면 처리 (handle)할 로직

    let inputValue = e.target.value; // 이벤트 객체의 target 속성 === 이벤트가 발생한 input 태그 

    setInputValue(inputValue);

    console.log(inputValue);
  }

  const hadleInpuClick = () => {
    setLogin(loginInitialValue);  // input 값 초기화
  }

  const hadleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 매개변수로 전달받는 e(이벤트 객체)의 target 
    // >> 이벤트가 발생된 요소
    // > target 요소 내의 속성에 접근 가능

    // e.target
    // : name과 value값을 추출
    // - name값) 상태 변수의 이름과 일치 OR 상태 변수 객체 내의 속성명과 일치 
    // - value값) 사용자로부터 입력받는 값
    const { name, value } = e.target;
    // console.log(name);
    // console.log(value);
    
    setLogin({
      ...login, // 기존의 id와 password 속성을 모두 가지는 login 객체 (이전의 값 가져오기)

      // 변경하고자 하는 name 키를 가진 value 값을 변경 (해당 필드만 값 업데이트)
      [name]: value // name.value (X)
    });

    if (name === 'id') setIsIdValid((value ? idPattern.test(value) : undefined));
    if (name === 'password') setIsPwValid((value ? pwPattern.test(value) : undefined));
  }

  const handleResetLogin = () => {
    setLogin(loginInitialValue);
    setIsIdValid(undefined);
    setIsPwValid(undefined);
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 폼 기본 제출 동작 방지
    alert('폼 데이터가 제출되었습니다.');
    console.log('폼 데이터가 제출 되었습니다.', login);
    
    alert('로그인 성공!');
    setIsIdValid(undefined);
    setIsPwValid(undefined);
    
    handleResetLogin(); // 제출 후 초기화
  }

  return (
    <div>
      <p>useState & 이벤트 핸들러</p>
      <input 
      type="text" 
      value={inputValue}
      // onChange 이벤트
      // : 사용자가 요소에 변화를 일으킬 때 마다 발생하는 이벤트
      // - input, select, textarea 등의 요소에 적용
      onChange={hadleInpuChange}
      />
      <br />
      <select onChange={hadleInpuChange}>
        <option value="축구">축구</option>
        <option value="야구">야구</option>
      </select>
      <br />
      <button onClick={hadleInpuClick}>초기화 버튼</button>

      <p>Input Value: {inputValue}</p>
      <h5>여러 개의 입력 상태 관리</h5>

      <form onSubmit={handleLoginSubmit}>
        <input 
      type="text" 
      name='id'
      value={login.id}
      placeholder='아이디'
      onChange={hadleLoginChange}
      />
      {isIdValid !== undefined && (
        <p style={{ color: isIdValid ? 'green' : 'red' }}>
          {isIdValid ? '✅ 사용 가능한 ID입니다.' : '❌ 사용 불가능한 ID입니다.'}
        </p>
      )}
      <br />
      <input 
      type="text" 
      name='password'
      value={login.password}
      placeholder='비밀번호'
      onChange={hadleLoginChange}
      />
      {isPwValid !== undefined && (
      <p style={{ color: isPwValid ? 'green' : 'red' }}>
      {isPwValid ? '✅ 사용 가능한 PW입니다.' : '❌ 사용 불가능한 PW입니다.'}
      </p>
      )}
      <p>아이디: {id} / 비밀번호: {password}</p>
      <button type='button' onClick={handleResetLogin}>초기화</button>
      <button type='submit'>전송하기</button>
      </form>
    </div>
  )
}

export default State02