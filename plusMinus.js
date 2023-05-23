const a = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  const length = arr.length;

  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  for(let i = 0; i < length; i++) {

    if(arr[i] === 0) {
        zeros++;
    }
    if(arr[i] > 0) {
        positives += 1;
    }
    if(arr[i] < 0) {
        negatives += 1;
    }
  }

  console.log((positives / length.toFixed(6)))
  console.log((negatives / length).toFixed(6))
  console.log((zeros / length).toFixed(6))
}

plusMinus(a);
