import React from "react";

const LdrOptions = (props) => {
  const options = [
    {
        text: "Suggestions",
        handler: props.actionProvider.handleSuggestionsList,
        id: 1,
    },
    { 
        text: "Services", 
        handler: props.actionProvider.handleServiceList,
        id: 2 
    },
    { 
        text: "Complains", 
        handler: props.actionProvider.handleComplainsList,
        id: 3
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

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LdrOptions;