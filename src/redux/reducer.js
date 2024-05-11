import {
  GROUPING_TYPE_DISPLAY,
  ORDERING_TYPE_DISPLAY,
} from '../constants/common.constants';
import { ACTION_TYPES } from './actionTypes.constants';

const initialState = {
  selectedGrouping:
    localStorage.getItem('grouping') ?? GROUPING_TYPE_DISPLAY.STATUS,
  selectedOrdering:
    localStorage.getItem('ordering') ?? ORDERING_TYPE_DISPLAY.PRIORITY,
  apiData: {},
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SELECTED_GROUPING:
      return {
        ...state,
        selectedGrouping: action.payload,
      };
    case ACTION_TYPES.SELECTED_ORDERING:
      return {
        ...state,
        selectedOrdering: action.payload,
      };
    case ACTION_TYPES.API_DATA:
      return {
        ...state,
        apiData: action.payload,
      };
    default:
      return state;
  }
}
