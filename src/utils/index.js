import { v4 as uuid } from "uuid";
import { classnames } from "./classnames";

const generateId = () => {
  return uuid();
};

export { classnames, generateId };
