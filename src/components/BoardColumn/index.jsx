import React from 'react';
import styles from './index.module.scss';
import TicketCard from './partials/TicketCard';
import { useSelector } from 'react-redux';
import {
  GROUPING_TYPE_DISPLAY_MAP,
  ORDERING_TYPE_MAP,
} from '../../constants/common.constants';
import { getInitials, getRandomColor } from '../../utils/common.utils';

function BoardColumn({
  name,
  icon,
  filterKey,
  tickets = [],
  users,
  showInitials,
}) {
  const selectedGrouping =
    useSelector(({ appReducer }) => appReducer.selectedGrouping) || {};
  const selectedOrdering =
    useSelector(({ appReducer }) => appReducer.selectedOrdering) || {};
  const filterKeyTkt = GROUPING_TYPE_DISPLAY_MAP[selectedGrouping];
  let usableFilterKey = filterKey;
  if (usableFilterKey === undefined) {
    usableFilterKey = users.find((user) => user.name === name).id;
  }
  const filteredTkts =
    tickets.filter((tkt) => tkt[filterKeyTkt] === usableFilterKey) || [];
  const userColor = {
    [name]: getRandomColor(),
  };
  const ordering = ORDERING_TYPE_MAP[selectedOrdering];
  const sortedTkts = filteredTkts.sort(
    (a, b) => (a[ordering] > b[ordering]) - (a[ordering] < b[ordering])
  );
  return (
    <div className={styles.boardColumn}>
      <div className={styles.boardHeader}>
        <div className={styles.columnHeader}>
          {showInitials ? (
            <div
              style={{
                background: userColor[name],
              }}
              className={styles.initials}
            >
              {getInitials(name)}
            </div>
          ) : (
            <img width="14" height="14" src={icon} alt="statusIcon" />
          )}
          {name}
        </div>
        <div className={styles.actions}>
          <img
            width="14"
            height="14"
            src="https://img.icons8.com/android/24/plus.png"
            alt="plus"
          />
          <img
            width="15"
            height="15"
            src="https://img.icons8.com/ios-glyphs/30/000000/ellipsis.png"
            alt="ellipsis"
            style={{ marginLeft: 15 }}
          />
        </div>
      </div>
      {sortedTkts.map((tkt, index) => {
        return (
          <TicketCard
            ticket={tkt}
            users={users}
            key={index}
            icon={icon}
            userColor={userColor[name]}
          />
        );
      })}
    </div>
  );
}

export default BoardColumn;
