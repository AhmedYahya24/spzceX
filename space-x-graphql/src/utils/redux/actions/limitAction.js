import {
  INCREMENTBYFIFTEEN,
  INCREMENTBYFIVE,
  INCREMENTBYTEN,
} from "./limitType";

export const incrementByFiveAction = () => {
  return { type: INCREMENTBYFIVE };
};

export const incrementByTenAction = () => {
  return { type: INCREMENTBYTEN };
};

export const incrementByFifteenAction = () => {
  return { type: INCREMENTBYFIFTEEN };
};
