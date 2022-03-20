import { ID } from "./IDType";

export const setIDAction = (id) => {
  return { type: ID, value: id };
};
