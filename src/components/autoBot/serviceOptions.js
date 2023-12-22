import React from "react";

const ServiceOptions = (props) => {
  const options = [
    {
        text: "Mapping Service",
        handler: props.actionProvider.handleMappingService,
        id: 1,
    },
    { 
        text: "valuation", 
        handler: props.actionProvider.handleValuation,
        id: 2 
    }
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="optionBtn"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="service-options-container">{optionsMarkup}</div>;
};

export default ServiceOptions;