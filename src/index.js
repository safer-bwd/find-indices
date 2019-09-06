import findIndex from 'lodash.findindex';

/**
 * @function find-indices
 * @param {Array} array The array to search
 * @param {Function|Array|Object|string} predicate The function invoked per iteration
 * @param {number} [fromIndex=0] The index to search from
 * @param {number} [limit=-1] The maximum number of indexes to search
 * @return {Array<number>} The array of found indexes
 * @example
 * import findIndexes from 'find-indices';
 *
 * const coll = [{ v: 0 }, { v: 2 }, { v: 0 }, { v: 3 }, { v: 3 }];
 * findIndexes(coll, ({ v }) => v > 1); // [1, 3, 4]
 * findIndexes(coll, { v: 0 }); // [0, 2]
 * findIndexes(coll, ['v', 3]); // [3, 4]
 * findIndexes(coll, 'v'); // [1, 3, 4]
 */
export default (array, predicate, fromIndex = 0, limit = -1) => {
  if (array.length === 0) {
    return [];
  }

  if (limit === 0) {
    return [];
  }

  const search = (current, indexes) => {
    const found = findIndex(array, predicate, current);
    if (found === -1) {
      return indexes;
    }

    indexes.push(found);
    if (limit > 0 && indexes.length === limit) {
      return indexes;
    }

    return search(found + 1, indexes);
  };

  return search(fromIndex, []);
};
