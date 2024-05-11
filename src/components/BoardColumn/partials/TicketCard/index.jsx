import React from 'react';
import styles from './index.module.scss';
import { PRIORITY_ICONS_MAP } from '../../../../constants/common.constants';
import { getInitials } from '../../../../utils/common.utils';

function TicketCard({ ticket = {}, users = [], userColor }) {
  const { id, userId, title, priority, tag = [] } = ticket;
  const { name } = users.find((usr) => usr.id === userId) || {};
  return (
    <div className={styles.tktCard}>
      <div className={styles.headerRow}>
        <div>{id}</div>
        <div
          className={styles.initials}
          style={{
            background: userColor,
          }}
        >
          {getInitials(name)}
        </div>
      </div>
      <div className={styles.title}>
        {/* <img width="14" height="14" src={icon} alt="ticketStatus" /> */}
        {title}
      </div>
      <div className={styles.startRow}>
        <div className={styles.priorityBox}><img width="10" height="10" src={PRIORITY_ICONS_MAP[priority]} alt={priority} /></div>
        <div>
          {tag.map((t, index) => {
            return <div key={index} className={styles.feature}><div className={styles.dot}></div>{t}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
