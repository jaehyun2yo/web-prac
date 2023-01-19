import { useState } from "react";

export const useInput = (validateValue) => {
  // 입력한값
  const [enteredValue, setEnteredValue] = useState("");
  // inputBox 를 터치했을때 확인하는 값
  const [isTouched, setIsTouched] = useState(false);

  // 유효성 검사하기위한 함수 validateValue
  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
