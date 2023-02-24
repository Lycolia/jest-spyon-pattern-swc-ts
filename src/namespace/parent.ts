import { Child } from 'src/namespace/child';

export namespace Parent {
  export const parent = (param: string) => {
    return Child.child(param);
  };
}
