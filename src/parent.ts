import { child } from 'src/child';

export const parent = (param: string) => {
  return child(param);
};
