import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

function SelectBox({ options = {}, onSelect, selected }) {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    document.addEventListener('click', ({ target }) => {
      if (!target.closest(`#${selected}`)) {
        setToggle(false);
      }
    });
  }, [selected]);

  return (
    <div className={styles.selectBox} onClick={() => setToggle(!toggle)}>
      {selected}
      <img
        width="15"
        height="15"
        src="https://img.icons8.com/ios-filled/50/000000/expand-arrow--v1.png"
        alt="expand-arrow--v1"
        className={styles.arrowDown}
      />
      <div
        className={styles.options}
        style={{
          display: toggle ? 'block' : 'none',
        }}
        id={selected}
      >
        {Object.values(options).map((option, index) => {
          return (
            <div
              key={index}
              className={styles.option}
              onClick={() => {
                onSelect(option);
              }}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectBox;
