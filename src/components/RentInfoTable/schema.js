import { renderPrice } from "./utils";

const rentInfo_part1 = [
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Houses",
    dataIndex: "houses",
    key: "houses",
  },
  {
    title: "Avg. Price",
    dataIndex: "average",
    key: "average",
  },
];

const rentInfo_part2 = [
  {
    title: "State",
    dataIndex: "state",
    key: "state",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
    filters: [
      {
        text: "Enterprise",
        value: "Enterprise",
      },
      {
        text: "Attleboro",
        value: "Attleboro",
      },
      {
        text: "South Hill",
        value: "South Hill",
      },
      {
        text: "Atlanta",
        value: "Atlanta",
      },
    ],
    onFilter: (value, record) => record.city === value,
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    filters: [
      {
        text: "Apartment",
        value: "Apartment",
      },
      {
        text: "Condo",
        value: "Condo",
      },
      {
        text: "Single-family",
        value: "Single-family",
      },
      {
        text: "Townhomes",
        value: "Townhomes",
      },
    ],
    onFilter: (value, record) => record.type === value,
  },
  {
    title: "price",
    dataIndex: "price",
    key: "price",
    filters: [
      {
        text: "500-599",
        value: 500,
      },
      {
        text: "600-699",
        value: 600,
      },
      {
        text: "700-799",
        value: 700,
      },
      {
        text: "800-899",
        value: 800,
      },
      {
        text: "900-999",
        value: 900,
      },
      {
        text: "1000-1099",
        value: 1000,
      },
      {
        text: "1100-1199",
        value: 1100,
      },
      {
        text: "1200-1299",
        value: 1200,
      },
      {
        text: "1300-1399",
        value: 1300,
      },
      {
        text: "1400-1499",
        value: 1400,
      },
      {
        text: "1500 up",
        value: 1500,
      },
    ],
    onFilter: (value, record) => {
      if (value < 1500)
        return record.price <= value + 99 && record.price >= value;
      else return record.price > 1500;
    },
    render: (price, record) => renderPrice(price, record),
  },
];

export default { rentInfo_part1, rentInfo_part2 };
