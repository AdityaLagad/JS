const sayGoodMorning = () => {
    console.log("Good Morning, Today is Monday");
  };
  sayGoodMorning();
  const multiplyThreeNums = (num1, num2, num3=1) => {
    const result = num1 * num2 * num3;
    console.log(`The result of multiplying ${num1}, ${num2}, and ${num3} is ${result}`);
  };
  multiplyThreeNums(5, 5, 2); 
  multiplyThreeNums(10, 4); 
  const sumFiveNums = (num1, num2, num3, num4, num5) => {
    const result = num1 + num2 + num3 + num4 + num5;
    console.log(`The sum of ${num1}, ${num2}, ${num3}, ${num4}, and ${num5} is ${result}`);
    return result;
  };
  const sum1 = sumFiveNums(100, 100, 200, 349, 756); 
  console.log(sum1); 
  const sum2 = sumFiveNums("1 am", "learning", "ES6", "features", "in depth"); 
  console.log(sum2); 
      