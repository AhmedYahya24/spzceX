import { INCREMENTBYVALUE } from "./limitType";

export const incrementByValueAction = (v) => {
  return { type: INCREMENTBYVALUE, value: v };
};
