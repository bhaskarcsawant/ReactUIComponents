import React, { useEffect, useRef, useState } from 'react'
import styles from "./FlamingoInput2.module.css";
import { ReactComponent as SearchLogo } from "./assets/search.svg";


function FlamingoInput2() {
  const [inputStr, setInputStr] = useState("");

  return (
    <div className={styles.InputContainer}>
      <input
        type="text"
        className={styles.InputBox}
        onChange={(e) => setInputStr(e.target.value)}
        placeholder="Search..."
      />
      <SearchLogo className={styles.SearchIcon} />
    </div>
  );
}

export default FlamingoInput2;