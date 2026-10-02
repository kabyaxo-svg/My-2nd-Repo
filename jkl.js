function secondLargest(numbers) {
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      secondLargest = largest;
      largest = numbers[i];
    } else if (numbers[i] > secondLargest && numbers[i] < largest) {
      secondLargest = numbers[i];
    }
  }
  return secondLargest;
}
console.log(secondLargest([10, 45, 23, 78, 56])); 
