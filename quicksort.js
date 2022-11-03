function quicksort(arr) {

  if (arr.length <= 1) return arr;
  let pivot = arr[0];

  let left = []
  let right = []

  for(let i = 1; i < arr.length; i++) {
  if (arr[i] <= pivot) left.push(arr[i])
  else right.push(arr[i])
  }

   return [...quicksort(left), pivot, ...quicksort(right)]

}

function quicksortMyWay(arr) {

  if (arr.length <= 1) return arr;
  let pivot = arr.pop()

  let first;
  for(let i = 0; i < arr.length; i++) {
  if (arr[i] > pivot && first === undefined) first = i;
  if (arr[i] <= pivot && first !== undefined) {
    [arr[i], arr[first]] = [arr[first], arr[i]];
    first++;
  }
  }

  let count = 0;
  arr.forEach((ele) => {
    if (ele <= pivot) count++
  });

  let right = arr.slice(count);
  arr.length-= (arr.length - count)


   return [...quicksort(arr), pivot, ...quicksort(right)]

}
module.exports = [quicksort];
