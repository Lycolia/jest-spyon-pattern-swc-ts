import { child } from 'src/named-export/child';

export const parent = (param: string) => {
  return child(param);
};
