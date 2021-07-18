function sortArrayOfObject(arr, key) {
  return arr.sort((a, b) => (a[key] < b[key] ? 1 : -1));
}

export default sortArrayOfObject;
