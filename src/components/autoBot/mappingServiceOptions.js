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
    },
    {
      text: "Topographical Survey",
      link: "topographical-survey",
      id: 4
    },
    {
      text: "Contour Survey",
      link: "contour-survey",
      id: 5
    },
    {
      text: "Layout Design and Marking",
      link: "layout-design-marking",
      id: 6
    },
    {
      text: "Road Survey",
      link: "road-survey",
      id: 7
    },
    {
      text: "Building Marking",
      link: "building-marking",
      id: 8
    },
    {
      text: "Drone Survey",
      link: "drone-survey",
      id: 9
    },
    {
      text: "DGPS Survey and Total Station and Drone Survey",
      link: "dgps-survey",
      id: 10
    },
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