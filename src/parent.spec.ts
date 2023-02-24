import * as child from 'src/child';
import { parent } from 'src/parent';

jest.mock('src/child');

describe('function', () => {
  it('called by child function', () => {
    const spiedChild = jest.spyOn(child, 'child');
    parent('foo');

    expect(spiedChild).toHaveBeenCalledWith('foo');
  });
});
