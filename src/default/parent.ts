import child from 'src/default/child';

const parent = (param: string) => {
  return child(param);
};

export const Parent = {
  parent,
};
