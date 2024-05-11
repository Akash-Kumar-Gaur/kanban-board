export const PRIORITY = [
  {
    name: 'No Priority',
    filterKey: 0,
    icon: 'https://img.icons8.com/external-line-adri-ansyah/64/external-mobile-mobile-application-line-adri-ansyah-9.png',
  },
  {
    name: 'Urgent',
    filterKey: 4,
    icon: 'https://img.icons8.com/color/48/high-priority.png',
  },
  {
    name: 'High',
    filterKey: 3,
    icon: 'https://img.icons8.com/plumpy/24/high-connection.png',
  },
  {
    name: 'Medium',
    filterKey: 2,
    icon: 'https://img.icons8.com/plumpy/24/medium-connection.png',
  },
  {
    name: 'Low',
    filterKey: 1,
    icon: 'https://img.icons8.com/fluency-systems-regular/48/medium-connection--v1.png',
  },
];

export const TASK_STATUS = [
  {
    name: 'Backlog',
    filterKey: 'Backlog',
    icon: 'https://img.icons8.com/material-outlined/24/backlog.png',
  },
  {
    name: 'Todo',
    filterKey: 'Todo',
    icon: 'https://img.icons8.com/ios-glyphs/30/todo-list--v1.png',
  },
  {
    name: 'In progress',
    filterKey: 'In progress',
    icon: 'https://img.icons8.com/fluency/48/in-progress--v1.png',
  },
  {
    name: 'Done',
    filterKey: 'Done',
    icon: 'https://img.icons8.com/flat-round/64/checkmark.png',
  },
  {
    name: 'Cancelled',
    filterKey: 'Cancelled',
    icon: 'https://img.icons8.com/color/48/cancel--v1.png',
  },
];

export const GROUPING_TYPE = {
  STATUS: 'status',
  USERID: 'userId',
  PRIORITY: 'priority',
};

export const PRIORITY_KEYS_DISPLAY = {
  NOPRIORITY: 'No Priority',
  URGENT: 'Urgent',
  HIGH: 'High',
  MEDIUM: 'Medium',
  LOW: 'Low',
};

export const PRIORITY_VALUES_MAP = {
  0: [PRIORITY_KEYS_DISPLAY.NOPRIORITY],
  4: [PRIORITY_KEYS_DISPLAY.URGENT],
  3: [PRIORITY_KEYS_DISPLAY.HIGH],
  2: [PRIORITY_KEYS_DISPLAY.MEDIUM],
  1: [PRIORITY_KEYS_DISPLAY.LOW],
};

export const PRIORITY_ICONS_MAP = {
  0: 'https://img.icons8.com/external-line-adri-ansyah/64/external-mobile-mobile-application-line-adri-ansyah-9.png',
  4: 'https://img.icons8.com/color/48/high-priority.png',
  3: 'https://img.icons8.com/plumpy/24/high-connection.png',
  2: 'https://img.icons8.com/plumpy/24/medium-connection.png',
  1: 'https://img.icons8.com/fluency-systems-regular/48/medium-connection--v1.png',
};

export const GROUPING_TYPE_DISPLAY = {
  STATUS: 'Status',
  USERID: 'User',
  PRIORITY: 'Priority',
};

export const BOARD_MAP = {
  [GROUPING_TYPE_DISPLAY.STATUS]: TASK_STATUS,
  [GROUPING_TYPE_DISPLAY.PRIORITY]: PRIORITY,
  [GROUPING_TYPE_DISPLAY.USERID]: null,
};

export const GROUPING_TYPE_DISPLAY_MAP = {
  [GROUPING_TYPE_DISPLAY.STATUS]: GROUPING_TYPE.STATUS,
  [GROUPING_TYPE_DISPLAY.USERID]: GROUPING_TYPE.USERID,
  [GROUPING_TYPE_DISPLAY.PRIORITY]: GROUPING_TYPE.PRIORITY,
};

export const ORDERING_TYPE_DISPLAY = {
  PRIORITY: 'Priority',
  TITLE: 'Title',
};

export const ORDERING_TYPE_MAP = {
  [ORDERING_TYPE_DISPLAY.PRIORITY]: 'priority',
  [ORDERING_TYPE_DISPLAY.TITLE]: 'title',
};
