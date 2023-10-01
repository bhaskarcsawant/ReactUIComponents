import React, { useEffect, useRef, useState } from 'react'
import styles from './FlamingoInput1.module.css'
import { ReactComponent as ErrorLogo } from "./assets/alert.svg";
import { ReactComponent as SuccessLogo } from "./assets/Check.svg";

function FlamingoInput1() {
  const [inputStr, setInputStr] = useState('')
  const input = useRef(null)
  const errorLogo = useRef(null)
  const successLogo = useRef(null);
  const errorMsg = useRef(null);
  
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  
  useEffect(() => {
    if (inputStr.length === 0) { // default state
      input.current.style.outlineColor = "#685879";
      input.current.style.borderColor = "#B3ABBC";
      errorLogo.current.style.display = "none";
      successLogo.current.style.display = "none";
      errorMsg.current.style.display = "none";
    } else if (isValidEmail(inputStr)) {
      // define any condition on which you want to show an success
      input.current.style.outlineColor = "#5CC689";
      input.current.style.borderColor = "#5CC689";
      errorLogo.current.style.display = "none";
      successLogo.current.style.display = "block";
      errorMsg.current.style.display = "none";
    } else if (!isValidEmail(inputStr)) {
      // define any condition on which you want to show an error
      input.current.style.outlineColor = "#EE7D52";
      input.current.style.borderColor = "#EE7D52";
      errorLogo.current.style.display = "block";
      errorMsg.current.style.display = "block";
      successLogo.current.style.display = "none";
    }
  }, [inputStr]);
    return (
      <div className={styles.InputContainer}>
        <input
          type="email"
          ref={input}
          className={styles.InputBox}
          onChange={(e) => setInputStr(e.target.value)}
          placeholder="Enter your email"
        />
        <ErrorLogo ref={errorLogo} className={styles.ErrorIcon} />
        <SuccessLogo ref={successLogo} className={styles.SuccessIcon} />
        <h4 ref={errorMsg} className={styles.ErrorMsg}>
          Enter an valid email
        </h4>
      </div>
    );
}

export default FlamingoInput1