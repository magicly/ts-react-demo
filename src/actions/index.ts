import * as constants from '../constants';

interface ActionINC {
  type: typeof constants.INC;
}
interface ActionDEC {
  type: typeof constants.DEC;
}

export type ActionCount = ActionINC | ActionDEC;

export function inc() {
  return {
    type: constants.INC,
  };
}

export function dec() {
  return {
    type: constants.DEC,
  };
}
