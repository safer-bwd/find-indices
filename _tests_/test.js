import findIndexes from '../src';

const users = [
  { 'name': 'Jon', age: 29, 'active': false},
  { 'name': 'Fred', age: 33, 'active': true, },
  { 'name': 'Fred', age: 26, 'active': false },
  { 'name': 'Jon', age: 29, 'active': true },
  { 'name': 'Bob', age: 35, 'active': true }
];

it('should work', async () => {
  expect(findIndexes([], () => true)).toEqual([]);
  expect(findIndexes(users, u => u.name === 'Jon')).toEqual([0, 3]);
  expect(findIndexes(users, u => u.age > 30)).toEqual([1, 4]);
});

it('should work with an iteratee shorthand', async () => {
  expect(findIndexes(users, { 'name': 'Fred', 'active': true })).toEqual([1]);
  expect(findIndexes(users, ['age', 29])).toEqual([0, 3]);
  expect(findIndexes(users, 'active')).toEqual([1, 3, 4]);
});

it('should work with a positive `fromIndex`', async () => {
  expect(findIndexes(users, u => u.name === 'Jon', 1)).toEqual([3]);
  expect(findIndexes(users, 'active', 2)).toEqual([3, 4]);
});

it('should work with a positive `limit`', async () => {
  expect(findIndexes(users, u => u.age >= 29, 0, 3)).toEqual([0, 1, 3]);
  expect(findIndexes(users, 'active', 0, 2)).toEqual([1, 3]);
});
