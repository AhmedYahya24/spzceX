import { HIDE, SHOW } from "./modalType";

export const setModalTrue = () => {
  return { type: SHOW };
};

export const setModalFalse = () => {
  return { type: HIDE };
};
