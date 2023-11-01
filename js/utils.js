export const formatNumber = (num, forms) => {
  const number = Math.abs(num);

  if (number === 1) {
    return `${number} ${forms[0]}`;
  } else if (number >= 2 && number <= 4) {
    return `${number} ${forms[1]}`;
  } else {
    return `${number} ${forms[2]}`;
  }
};
