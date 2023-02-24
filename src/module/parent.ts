import { Child } from 'src/module/child';

const parent = (param: string) => {
  return Child.child(param);
};

export const Parent = {
  parent,
};
