import findIndex from 'lodash.findindex';

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

    return search(found + 1, indexes)
  }

  return search(fromIndex, []);
};
