import { useInput } from "./hooks/use-input";

const SimpleInput = (props) => {
  // 커스텀훅
  const {
    value: enteredName,
    isValid: enteredNameIsVaild,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsVaild) {
    formIsValid = true;
  }

  const formSubmitssionHandler = (e) => {
    console.log("누르긴함");
    e.preventDefault();

    if (!enteredNameIsVaild) {
      console.log("작동안함");
      return;
    }
    console.log(enteredName);

    nameReset();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  console.log(formIsValid);
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
        {nameInputHasError && <p className="error-text">이름을 입력해주세요</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
