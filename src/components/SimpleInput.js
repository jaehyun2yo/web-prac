import { useState } from "react";

const SimpleInput = (props) => {
  // 입력값
  const [enteredName, setEnteredName] = useState("");
  // 유효한지확인하는값
  // const [enteredNameIsVaild, setEnteredNameIsVaild] = useState(false);
  // 사용자 가 입력란에 터치한지 확인하는 값
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsVaild = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsVaild && enteredNameTouched;

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const formSubmitssionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);
    if (!enteredNameIsVaild) {
      return;
    }
    console.log(enteredName);

    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  console.log(enteredName);
  return (
    <form onSubmit={formSubmitssionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">이름을 입력해주세요</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
