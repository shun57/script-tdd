function multiply(...args) {
  if (args.length > 30) {
    throw new Error("引数は31個未満にしてください。");
  }

  let result = args.reduce((sum, num) => sum * num);

  if (isNaN(result)) {
    throw new Error("数値を入力してください。");
  }

  if (result > 1000) {
    return "big big number";
  }

  return result;
}

function add(...args) {
  if (args.length > 30) {
    throw new Error("引数は31個未満にしてください。");
  }

  let result = args.reduce((sum, num) => sum + num);

  if (isNaN(result)) {
    throw new Error("数値を入力してください。");
  }

  if (result > 1000) {
    return "too big";
  }

  return result;
}

function substract(...args) {
  if (args.length > 30) {
    throw new Error("引数は31個未満にしてください。");
  }

  let result = args.reduce((sum, num) => sum - num);

  if (isNaN(result)) {
    throw new Error("数値を入力してください。");
  }

  if (result < 0) {
    return "negative number";
  }

  return result;
}

function divide(...args) {
  if (args.length > 30) {
    throw new Error("引数は31個未満にしてください。");
  }

  let result = args.reduce((sum, num) => sum / num);
  const digit = 2;

  if (isNaN(result)) {
    throw new Error("数値を入力してください。");
  }

  return parseFloat(result.toFixed(digit));
}

module.exports = {
  multiply,
  add,
  substract,
  divide,
};
