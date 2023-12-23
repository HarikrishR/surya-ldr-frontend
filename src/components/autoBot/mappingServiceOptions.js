import React from "react";

const MappingServiceOptions = (props) => {
  const options = [
    {
        text: "Boundary Survey",
        link: "boundary-survey",
        id: 1,
    },
    { 
        text: "Boundary Fixing Surveying", 
        link: "boundary-fixing-surveying",
        id: 2 
    },
    { 
        text: "FMB Drawing", 
        link: "fmb-drawing",
        id: 3
    }
  ];

  const optionsMarkup = options.map((option) => (
    <a
      className="optionLink"
      href={option.link}
      target="_blank"
      key={option.id}
      title={option.text}
      onClick={option.handler}
    >
      {option.text}
    </a>
  ));

  return <div className="service-options-container">{optionsMarkup}</div>;
};

export default MappingServiceOptions;