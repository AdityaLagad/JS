const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45]
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);

arrayRollNumbers.sort();
console.log(arrayRollNumbers);

arrayRollNumbers.sort(function(a, b) {
    return a - b;
  });
  console.log(arrayRollNumbers);

  const greatest = Math.max(...arrayRollNumbers);
console.log("Greatest no",greatest);

const smallest = Math.min(...arrayRollNumbers);
console.log("smallest no",smallest);

const uniqueArray = arrayRollNumbers.filter((value, index) => arrayRollNumbers.indexOf(value) === index);
console.log(uniqueArray);