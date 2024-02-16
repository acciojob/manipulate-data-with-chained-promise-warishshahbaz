function processData(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  });
}

function filterOddNumbers(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredArray = array.filter(num => num % 2 === 0);
      resolve(filteredArray);
    }, 1000);
  });
}

function multiplyEvenNumbers(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedArray = array.map(num => (num % 2 === 0) ? num * 2 : num);
      resolve(multipliedArray);
    }, 2000);
  });
}

const inputArray = [1, 2, 3, 4];

processData(inputArray)
  .then(filteredArray => filterOddNumbers(filteredArray))
  .then(multipliedArray => multiplyEvenNumbers(multipliedArray))
  .then(finalArray => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = finalArray
  });
