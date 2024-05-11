import React, { useEffect } from 'react';
import styles from './index.module.scss';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { BOARD_MAP } from '../../constants/common.constants';
import BoardColumn from '../../components/BoardColumn';
import { ACTION_TYPES } from '../../redux/actionTypes.constants';

function HomeScene() {
  const selectedGrouping =
    useSelector(({ appReducer }) => appReducer.selectedGrouping) || {};
  const apiData = useSelector(({ appReducer }) => appReducer.apiData) || {};
  let boardMap = BOARD_MAP[selectedGrouping];
  let showInitials = false;

  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://api.quicksell.co/v1/internal/frontend-assignment'
      );
      const parsed = await res.json();
      dispatch({
        type: ACTION_TYPES.API_DATA,
        payload: parsed,
      });
    };
    fetchData();
  }, [dispatch]);

  const { users = [], tickets = [] } = apiData || {};

  if (boardMap === null) {
    boardMap = users;
    showInitials = true;
  }

  return (
    <div className={styles.homeScene}>
      <Header />
      <div className={styles.board}>
        {boardMap.map(({ name, icon, filterKey }, index) => {
          return (
            <BoardColumn
              name={name}
              icon={icon}
              filterKey={filterKey}
              tickets={tickets}
              users={users}
              key={index}
              showInitials={showInitials}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomeScene;
