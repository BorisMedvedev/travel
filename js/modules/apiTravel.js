export const getDate = async () => {
  try {
    const response = await fetch('data.json', {
      method: 'GET',
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
