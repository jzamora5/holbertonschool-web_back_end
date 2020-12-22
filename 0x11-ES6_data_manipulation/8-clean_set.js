function cleanSet(set, startString) {
  const string = [];

  if (typeof set !== 'object' || typeof startString !== 'string') {
    return '';
  }

  for (const item of set) {
    if (startString !== '' && item.startsWith(startString)) {
      string.push(item.slice(startString.length));
    }
  }
  return string.join('-');
}

export default cleanSet;
