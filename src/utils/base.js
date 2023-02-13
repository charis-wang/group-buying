const getGroupData = (data, field_name) => {
  let result = {};

  for (let doc of data) {
    const field = doc[field_name];
    if (result[field] === undefined) {
      result[field] = [];
    }
    result[field].push(doc);
  }

  return result;
};
const add = (x, y) => x + y;
const sum = (arr) => arr.reduce(add, 0);
const getDatetimeString = (timestamp) => new Date(timestamp * 1000).toString();
const getOrderSubTotal = (order) => order.amount * order.price;

export { getDatetimeString, add, sum, getGroupData, getOrderSubTotal };
