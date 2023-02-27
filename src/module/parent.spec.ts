import { Child } from 'src/module/child';
import { Parent } from 'src/module/parent';

describe('module', () => {
  it('called by child function', () => {
    const spiedChild = jest.spyOn(Child, 'child');
    Parent.parent('foo');

    expect(spiedChild).toHaveBeenCalledWith('foo');
  });
});
