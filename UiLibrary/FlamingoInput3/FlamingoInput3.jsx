import React, { useRef, useState } from 'react'
import styles from "./FlamingoInput3.module.css";
import { ReactComponent as EyeLogo } from "./assets/eye.svg";
import { ReactComponent as EyeOpenLogo } from "./assets/eyeOpen.svg";


function FlamingoInput3() {
  const [inputStr, setInputStr] = useState("");
  const [closedEye, setClosedEye] = useState(true);
  const input = useRef(null);
  const handlePassVisibility = () => {
    setClosedEye(!closedEye)
    if (input.current.type === 'password') {
      input.current.type= "text"; 
    } else {
      input.current.type = "password";
    }
  }
  return (
    <div className={styles.InputContainer}>
      <input
        type="password"
        ref={input}
        className={styles.InputBox}
        onChange={(e) => setInputStr(e.target.value)}
        placeholder="Enter your password"
      />
      {closedEye ? (
        <EyeLogo
          className={styles.EyeIcon}
          onClick={() => handlePassVisibility()}
        />
      ) : (
        <EyeOpenLogo
          className={styles.EyeOpenIcon}
          onClick={() => handlePassVisibility()}
        />
      )}
    </div>
  );
}

export default FlamingoInput3;