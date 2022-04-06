import React from "react";
import PropTypes from "reac";
import "./TeslaWheels.css";

const LabelLists = (props) => {
  const value = props.wheels.value;
  const wheelsHandler = props.wheels.handleChangeWheels;
  const size = [19, 21];
  const LabelItems = size.map((size) => (
    <label
      key={size}
      className={`tesla-wheels__item tesla-wheels__item--${size} ${
        value === size ? "tesla-wheels__item--active" : ""
      }`}
    >
      <input
        type="radio"
        name="wheelsize"
        value="size"
        checked={value === size}
        onCharge={() => {
          chargeHandler(size);
        }}
      />
      <p>{size}</p>
    </label>
  ));
  return <div>{LabelItems}</div>;
};
