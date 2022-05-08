import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";

const options = [
  { label: "State", value: "state" },
  { label: "City", value: "city" },
  { label: "Type", value: "type" },
  { label: "Price", value: "price" },
];

const RentGroupSegment = ({ onChange, value }) => (
  <div className="mb-4 flex flex-1">
    <Checkbox.Group options={options} onChange={onChange} value={value} />
  </div>
);

RentGroupSegment.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.arrayOf(PropTypes.string),
};
export default RentGroupSegment;
