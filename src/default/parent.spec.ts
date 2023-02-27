import * as child from 'src/default/child';
import { Parent } from 'src/default/parent';

jest.mock('src/default/child');

describe('default', () => {
  it('called by child function', () => {
    const spiedChild = jest.spyOn(child, 'default');
    Parent.parent('foo');

    expect(spiedChild).toHaveBeenCalledWith('foo');
  });
});
