function findEvenNumUnder50() {
  let arr = new Array();

  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    }
  }
  return arr;
}
