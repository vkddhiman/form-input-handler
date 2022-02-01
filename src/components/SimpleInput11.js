// import { useState } from "react";

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
  // const nameInputRef = useRef();
  // const [enteredName, setEnteredName] = useState('');
  // // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // // const [formIsValid, setFormIsValid] = useState(false);

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false); 

  // // const enteredNameIsValid = enteredName.trim() !== '';
  // // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // const enteredEmailIsValid = enteredEmail.includes('@');
  // const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
    if (enteredNameIsValid && enteredEmailIsValid) {
      formIsValid = true;
    } 
    // else {
    //   formIsValid = false;
    // }


  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid])


  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     console.log('Name input is valid!')
  //   }
  // }, [enteredNameIsValid])

  // const nameInputChangeHandler = (event) => {
  //   setEnteredName(event.target.value);

  //   // if(event.target.value.trim() !== ''){
  //   //   setEnteredNameIsValid(true);
  //   // }
  // };

  // const emailInputChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value)
  // }

  // // const nameInputBlurHandler = (event) => {
  // //   setEnteredNameTouched(true);
  // //   // if(enteredName.trim() === ''){
  // //   //   setEnteredNameIsValid(false);
  // //   // }
  // // }

  // const emailInputBlurHandler = (event) => {
  //   setEnteredEmailTouched(true)
  // }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // setEnteredNameTouched(true)
    if (!enteredNameIsValid) {
      return;
    }
    // if(enteredName.trim() === ''){
    //   setEnteredNameIsValid(false);
    //   return;
    // }
    // setEnteredNameIsValid(true);
    console.log(enteredName);
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);
    // nameInputRef.current.value = ''; NOT IDEAL, DON'T MANIPULATE THE DOM
    // setEnteredName('');
    // setEnteredNameTouched(false);
    resetNameInput();
    resetEmailInput();
    // setEnteredEmail('');
    // setEnteredEmailTouched(false)
  }

  // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
  // const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'

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
