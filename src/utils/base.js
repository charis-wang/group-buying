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

// MEMO: moment.js
const getDatetimeString = (timestamp, toDate = false) => {
  const dt = new Date(timestamp * 1000);
  let dtString = "";

  const year = dt.getFullYear().toString();
  const month = (dt.getMonth() + 1).toString().padStart(2, "0");
  const day = dt.getDate().toString().padStart(2, "0");
  const hour = dt.getHours().toString().padStart(2, "0");
  const minute = dt.getMinutes().toString().padStart(2, "0");

  dtString = `${year}-${month}-${day}`;

  if (!toDate) dtString += ` ${hour}:${minute}`;

  return dtString;
};
const getOrderSubTotal = (order) => order.amount * order.subtotal;

export { getDatetimeString, add, sum, getGroupData, getOrderSubTotal };
