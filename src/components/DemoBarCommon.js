import React from "react";

const DemoBarCommon = (props) => {
  const config = {
    data: props.data,
    xField: props.xField,
    yField: props.yField,
    seriesField: props.seriesField,
    legend: {
      position: "top-left",
    },
  };
  return <div>DemoBarCommon</div>;
};

export default DemoBarCommon;
