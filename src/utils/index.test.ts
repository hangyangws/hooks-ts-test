import { titleCase } from './index';

test('string to title case', () => {
  expect(titleCase('foo')).toBe('Foo');
});
