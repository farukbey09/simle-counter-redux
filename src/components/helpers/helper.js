export const createRandomID = (digit) => {
  var id = Math.floor(Math.random() * Math.pow(10, digit));
  return id;
};
