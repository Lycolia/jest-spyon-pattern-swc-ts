import * as child from 'src/named-export/child';
import { parent } from 'src/named-export/parent';

jest.mock('src/named-export/child');

describe('function', () => {
  it('called by child function', () => {
    const spiedChild = jest.spyOn(child, 'child');
    parent('foo');

    expect(spiedChild).toHaveBeenCalledWith('foo');
  });
});
