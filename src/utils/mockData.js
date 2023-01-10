const orderRawData = [
  {
    orderId: "11111",
    buyer: "Ami",
    item: "紅茶",
    detail: "",
    price: 10,
    amount: 3,
    status: "paid",
  },
  {
    orderId: "11112",
    buyer: "Jeffrey",
    item: "綠茶",
    detail: "",
    price: 20,
    amount: 1,
    status: "paid",
  },
  {
    orderId: "11113",
    buyer: "B",
    item: "麥茶",
    detail: "",
    price: 30,
    amount: 1,
    status: "paid",
  },
  {
    orderId: "11114",
    buyer: "Jeffrey",
    item: "紅茶",
    detail: "",
    price: 10,
    amount: 2,
    status: "paid",
  },
  {
    orderId: "11115",
    buyer: "C",
    item: "四季春",
    detail: "",
    price: 40,
    amount: 5,
    status: "unpaid",
  },
  {
    orderId: "11116",
    buyer: "C",
    item: "抹茶拿鐵",
    detail: "",
    price: 40,
    amount: 5,
    status: "unpaid",
  },
];

const groupMenus = [
  {
    groupId: "A0001",
    groupName: "只想喝醇茶",
    detail: "only large size",
    items: [
      {
        itemId: "A13901",
        itemName: "麥茶",
        price: 10,
        detail: "無咖啡因",
      },
      {
        itemId: "A13902",
        itemName: "紅茶",
        price: 10,
        detail: "",
      },
      {
        itemId: "A13903",
        itemName: "綠茶",
        price: 10,
        detail: "",
      },
      {
        itemId: "A13904",
        itemName: "四季春",
        price: 10,
        detail: "",
      },
    ],
  },
  {
    groupId: "A0002",
    groupName: "只想喝奶茶",
    detail: "only large size",
    items: [
      {
        itemId: "A23901",
        itemName: "麥茶拿鐵",
        price: 60,
        detail: "",
      },
      {
        itemId: "A23902",
        itemName: "紅茶拿鐵",
        price: 60,
        detail: "",
      },
      {
        itemId: "A23903",
        itemName: "綠茶拿鐵",
        price: 60,
        detail: "",
      },
      {
        itemId: "A23904",
        itemName: "四季春拿鐵",
        price: 60,
        detail: "",
      },
    ],
  },
  {
    groupId: "A0003",
    groupName: "只想喝奶蓋",
    detail: "only large size",
    items: [
      {
        itemId: "A23901",
        itemName: "麥茶奶蓋",
        price: 60,
        detail: "甜奶蓋",
      },
      {
        itemId: "A23902",
        itemName: "紅茶奶蓋",
        price: 60,
        detail: "甜奶蓋",
      },
      {
        itemId: "A23903",
        itemName: "綠茶奶蓋",
        price: 60,
        detail: "鹹奶蓋",
      },
      {
        itemId: "A23904",
        itemName: "四季春奶蓋",
        price: 60,
        detail: "鹹奶蓋",
      },
    ],
  },
];

const orderInfo = {
  orderDeadlineTimestamp: "1673422200",
  initiator: "Dixon",
  shopName: "Enjoy Drinking",
};

export { orderRawData, groupMenus, orderInfo };
