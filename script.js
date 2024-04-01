document.addEventListener('DOMContentLoaded', function() {
  const outputDiv = document.getElementById('output');

  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 3000);
    });
  }

  function filterOddNumbers(array) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const evens = array.filter(num => num % 2 === 0);
        resolve(evens);
      }, 1000);
    });
  }

  function multiplyByTwo(array) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const doubled = array.map(num => num * 2);
        resolve(doubled);
      }, 2000);
    });
  }

  fetchData()
    .then(filterOddNumbers)
    .then(multiplyByTwo)
    .then(result => {
      outputDiv.textContent = result.join(', ');
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
