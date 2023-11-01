export const formatNumber = (num, forms) => {
  const number = Math.abs(num);

  if (number === 1) {
    return `${forms[0]}`;
  } else if (number >= 2 && number <= 4) {
    return `${forms[1]}`;
  } else {
    return `${forms[2]}`;
  }
};
