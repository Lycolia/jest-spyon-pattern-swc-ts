import { Child } from 'src/namespace/child';
import { Parent } from 'src/namespace/parent';

jest.mock('src/namespace/child');

describe('namespace', () => {
  it('called by child function', () => {
    const spiedChild = jest.spyOn(Child, 'child');
    Parent.parent('foo');

    expect(spiedChild).toHaveBeenCalledWith('foo');
  });
});
