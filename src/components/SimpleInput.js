import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } =useInput(value=> value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } =useInput(value=> value.includes('@'));
 
  let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
    } 
 
  const formSubmitHandler = (event) => {
    event.preventDefault();
    // setEnteredNameTouched(true)
    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  }


  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'

  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}  >
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          // ref={nameInputRef} 
          type='text' 
          id='name' 
          value={enteredName}
          onBlur={nameBlurHandler}
          onChange={nameChangeHandler} />
        {nameInputHasError && <p className="error-text" >Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-mail</label>
        <input
          // ref={nameInputRef} 
          type='email' 
          id='email' 
          value={enteredEmail}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler} />
        {emailInputHasError && <p className="error-text" >Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
