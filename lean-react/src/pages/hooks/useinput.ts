// useInput.ts

import React, { useState } from "react";

type UseInputReturn = {
  //& 입력 필드의 현재 값
  value: string;
  //& 초기값으로 되돌리는 이벤트
  handleReset: () => void;
  //& bind(묶다) - input 속성에 바로 연결 가능한 객체 { value, onChange}
  bind: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
}

export function useInput(initalValue: string ) {
  const [value, setValue] = useState<string>(initalValue);

  const handleInputChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleReset = () => {
    setValue(initalValue);
  }

  const bind = {
    value, 
    onChange: handleInputChange
  }

  return { value, handleReset, bind };
}