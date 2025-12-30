/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom';
import { CacheName, CacheStatusName } from '../../index';

describe('BusinessTreeSelectBuilder Constants', () => {
  it('exports correct CacheName constant', () => {
    expect(CacheName).toBe('@@treeSelectData');
  });

  it('exports correct SelectStatusName constant', () => {
    expect(CacheStatusName).toBe('@@treeSelectDataIsStart');
  });
});
