import React from "react";
import TableHeader from "./Header";

const Dimensions = ({ formated }) => {
  const props = {
    title: "Products",
    items: ["Category", "Sub Category"],
  };
  return (
    <>
      <TableHeader {...props} />
      <DimensionsBody formated={formated} />
    </>
  );
};

const DimensionsBody = ({ formated }) => {
  return (
    <div>
      {Object.keys(formated).map((category) => {
        return category !== "states" ? (
          <div key={category}>
            <div className="category">
              <div className="title">{category}</div>
              <div className="sub-categories">
                <ul>
                  {Object.keys(formated[category])
                    .sort()
                    .map((subCategory) => {
                      return (
                        <li key={`${subCategory}${category}`}>{subCategory}</li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className="sub-total">{category} Total</div>
          </div>
        ) : (
          <div key={category}></div>
        );
      })}
    </div>
  );
};

export default Dimensions;
