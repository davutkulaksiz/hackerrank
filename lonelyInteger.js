function lonelyInteger(a) {
  for (let i = 0; i < a.length; i++) {
    let count = 0;

    for (let j = 0; j < a.length; j++) {
      if (a[j] === a[i]) {
        count++;
      }
    }

    if (count === 1) {
      return a[i];
    }
  }
}

const arr = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyInteger(arr));
