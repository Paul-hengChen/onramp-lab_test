import React from "react";

export const renderPrice = (price, record) => {
  const { average } = record;
  if (price >= average * 1.2 && price <= average * 0.8)
    return <div className="text-black">{`$ ${price}`}</div>;
  if (price >= average * 1.2)
    return <div className="text-red-500">{`$ ${price}`}</div>;
  if (price <= average * 0.8)
    return <div className="text-orange-500">{`$ ${price}`}</div>;
  return <div className="text-black">{`$ ${price}`}</div>;
};
