import { ActionCount } from '../actions';
import { StoreState } from '../types';
import { INC, DEC } from '../constants';

export default function reducer(prevState: StoreState, action: ActionCount): StoreState {
  switch (action.type) {
    case INC:
      return { ...prevState, count: prevState.count + 1 };
    case DEC:
      return { ...prevState, count: prevState.count - 1 };
    default:
      return prevState;
  }
}
