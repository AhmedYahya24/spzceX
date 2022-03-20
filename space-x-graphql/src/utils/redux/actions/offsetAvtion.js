import { NEXTOFFSET, PREVIOUSOFFSET } from "./offsetType";

export const nextOffsetAction = (limit) => {
  return { type: NEXTOFFSET, value: limit };
};
export const previousOffsetAction = (limit) => {
  return { type: PREVIOUSOFFSET, value: limit };
};
