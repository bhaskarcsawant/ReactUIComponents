import React from 'react'
import styles from './InputBox.module.css'
import { ReactComponent as ReactLogo } from "./assets/account.svg";




function InputBox() {
  return (
    <div className={styles.inputboxContainer}>
      <input className={styles.inputBox} type="text" placeholder="Your Name" />
      <ReactLogo className={styles.accountIcon} />
    </div>
  );
}

export default InputBox