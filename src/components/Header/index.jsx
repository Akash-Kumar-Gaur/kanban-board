import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import SelectBox from '../SelectBox';
import {
  GROUPING_TYPE_DISPLAY,
  ORDERING_TYPE_DISPLAY,
} from '../../constants/common.constants';
import { ACTION_TYPES } from '../../redux/actionTypes.constants';

function Header() {
  const selectedGrouping =
    useSelector(({ appReducer }) => appReducer.selectedGrouping) || {};
  const selectedOrdering =
    useSelector(({ appReducer }) => appReducer.selectedOrdering) || {};
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  const updateGrouping = (group) => {
    localStorage.setItem('grouping', group);
    dispatch({
      type: ACTION_TYPES.SELECTED_GROUPING,
      payload: group,
    });
  };
  const updateOrdering = (order) => {
    localStorage.setItem('ordering', order);
    dispatch({
      type: ACTION_TYPES.SELECTED_ORDERING,
      payload: order,
    });
  };

  useEffect(() => {
    document.addEventListener('click', ({ target }) => {
      if (!target.closest(`#headerDropdown`)) {
        setToggle(false);
      }
    });
  }, []);
  return (
    <div className={styles.header}>
      <div
        className={styles.dropdown}
        id="headerDropdown"
        onClick={() => setToggle(!toggle)}
      >
        <img
          width="16"
          height="16"
          src="https://img.icons8.com/ios/50/horizontal-settings-mixer--v1.png"
          alt="horizontal-settings-mixer--v1"
        />
        Display
        <img
          width="15"
          height="15"
          src="https://img.icons8.com/ios-filled/50/000000/expand-arrow--v1.png"
          alt="expand-arrow--v1"
          className={styles.arrowDown}
        />
        <div
          className={styles.content}
          style={{
            display: toggle ? 'block' : 'none',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.row}>
            Grouping
            <SelectBox
              options={GROUPING_TYPE_DISPLAY}
              onSelect={updateGrouping}
              selected={selectedGrouping}
            />
          </div>
          <div className={styles.row}>
            Ordering
            <SelectBox
              options={ORDERING_TYPE_DISPLAY}
              onSelect={updateOrdering}
              selected={selectedOrdering}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
