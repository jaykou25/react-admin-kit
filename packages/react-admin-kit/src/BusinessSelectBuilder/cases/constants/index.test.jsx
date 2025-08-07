/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { SelectName, SelectStatusName, SelectTotalName } from '../../index';

describe('BusinessSelectBuilder Constants', () => {
  it('exports correct SelectName constant', () => {
    expect(SelectName).toBe('@@selectData');
  });

  it('exports correct SelectStatusName constant', () => {
    expect(SelectStatusName).toBe('@@selectDataIsStart');
  });

  it('exports correct SelectTotalName constant', () => {
    expect(SelectTotalName).toBe('@@selectDataTotal');
  });
});
